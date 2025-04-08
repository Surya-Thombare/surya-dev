'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Stars, PerformanceMonitor } from '@react-three/drei'
import * as THREE from 'three'
import { useMousePosition } from '@/hooks/useMousePosition'

const FloatingParticles = () => {
  const groupRef = useRef<THREE.Group>(null)
  const mousePosition = useMousePosition()
  const { size } = useThree()
  const [particles, setParticles] = useState<THREE.Mesh[]>([])

  // Convert mouse position to 3D space
  const mouse3D = {
    x: (mousePosition.x / size.width) * 2 - 1,
    y: -(mousePosition.y / size.height) * 2 + 1
  }

  useEffect(() => {
    const newParticles: THREE.Mesh[] = []
    const particleCount = 60

    // Create a range of particle sizes
    const sizes = [0.05, 0.1, 0.15, 0.2, 0.25]

    for (let i = 0; i < particleCount; i++) {
      // Create a particle with random position, scale, and color
      const geometry = new THREE.IcosahedronGeometry(1, 0)

      // Generate a color in the blue-cyan spectrum
      const hue = 0.55 + Math.random() * 0.15 // Blue to cyan range
      const saturation = 0.7 + Math.random() * 0.3
      const lightness = 0.4 + Math.random() * 0.4

      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color().setHSL(hue, saturation, lightness),
        transmission: 0.6,
        roughness: 0.2,
        metalness: 0.1,
        reflectivity: 0.5,
        clearcoat: 0.5,
        clearcoatRoughness: 0.1,
        transparent: true,
        opacity: 0.8
      })

      const mesh = new THREE.Mesh(geometry, material)

      // Random position within a spherical volume
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 5 + Math.random() * 5

      mesh.position.x = radius * Math.sin(phi) * Math.cos(theta)
      mesh.position.y = radius * Math.sin(phi) * Math.sin(theta)
      mesh.position.z = radius * Math.cos(phi)

      // Random scale
      const scale = sizes[Math.floor(Math.random() * sizes.length)]
      mesh.scale.set(scale, scale, scale)

      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI
      mesh.rotation.y = Math.random() * Math.PI
      mesh.rotation.z = Math.random() * Math.PI

      // Set unique animation parameters for each particle
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        },
        floatSpeed: 0.2 + Math.random() * 0.8,
        floatRadius: 0.2 + Math.random() * 0.3,
        initialY: mesh.position.y,
        timeOffset: Math.random() * Math.PI * 2
      }

      if (groupRef.current) {
        groupRef.current.add(mesh)
      }

      newParticles.push(mesh)
    }

    setParticles(newParticles)

    return () => {
      // Clean up
      if (groupRef.current) {
        newParticles.forEach(mesh => {
          groupRef.current?.remove(mesh)
          mesh.geometry.dispose()
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach(material => material.dispose())
          } else {
            mesh.material.dispose()
          }
        })
      }
    }
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Overall group rotation
      groupRef.current.rotation.x += delta * 0.03
      groupRef.current.rotation.y += delta * 0.05

      // React to mouse
      const targetX = mouse3D.x * 0.3
      const targetY = mouse3D.y * 0.3

      groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.01
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.01

      // Animate each particle
      particles.forEach(particle => {
        const { rotationSpeed, floatSpeed, floatRadius, initialY, timeOffset } = particle.userData

        // Rotate particle
        particle.rotation.x += rotationSpeed.x
        particle.rotation.y += rotationSpeed.y
        particle.rotation.z += rotationSpeed.z

        // Float up and down
        const time = state.clock.getElapsedTime()
        particle.position.y = initialY + Math.sin((time + timeOffset) * floatSpeed) * floatRadius
      })
    }
  })

  return <group ref={groupRef} />
}

const GradientBackground = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial
      if (material.uniforms) {
        material.uniforms.time.value = clock.getElapsedTime() * 0.15
      }
    }
  })

  // Vertex shader for the background
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `

  // Fragment shader for the background
  const fragmentShader = `
    varying vec2 vUv;
    uniform float time;
    
    // Simplex noise function
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    
    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      
      // First corner
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      
      // Other corners
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      
      // Permutations
      i = mod289(i);
      vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
              
      // Gradients: 7x7 points over a square, mapped onto an octahedron.
      float n_ = 0.142857142857; // 1.0/7.0
      vec3 ns = n_ * D.wyz - D.xzx;
      
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      
      // Normalise gradients
      vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      
      // Mix final noise value
      vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
    }
    
    void main() {
      // Create a gradient with moving noise
      vec2 uv = vUv;
      
      // Generate simplex noise
      float noise1 = snoise(vec3(uv * 3.0, time * 0.2)) * 0.5 + 0.5;
      float noise2 = snoise(vec3(uv * 5.0, time * 0.3 + 100.0)) * 0.5 + 0.5;
      
      // Dark blue to light blue/cyan gradient 
      vec3 color1 = vec3(0.03, 0.05, 0.2); // Dark blue
      vec3 color2 = vec3(0.0, 0.6, 0.8);   // Cyan
      
      // Mix colors based on position and noise
      float mixFactor = uv.y * 0.5 + 0.25 + noise1 * 0.2;
      vec3 baseColor = mix(color1, color2, mixFactor);
      
      // Add subtle noise patterns
      baseColor += vec3(0.05, 0.07, 0.1) * noise2;
      
      // Add stars/particles effect
      float stars = pow(noise2, 10.0) * 0.8;
      baseColor += vec3(stars);
      
      gl_FragColor = vec4(baseColor, 1.0);
    }
  `

  return (
    <mesh ref={meshRef} position={[0, 0, -10]}>
      <planeGeometry args={[50, 50]} />
      <shaderMaterial
        uniforms={{
          time: { value: 0 }
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  )
}

import { useState } from 'react'

export default function ThreeBackground() {
  const [performanceMode, setPerformanceMode] = useState(false)

  return (
    <div className="canvas-container">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 60 }}>
        <PerformanceMonitor
          onDecline={() => setPerformanceMode(true)}
        >
          <GradientBackground />

          {!performanceMode && (
            <>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={0.6} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0af" />

              <FloatingParticles />
              <Stars radius={100} depth={50} count={1000} factor={4} saturation={0.5} fade speed={1} />
              <Environment preset="city" />
            </>
          )}
        </PerformanceMonitor>
      </Canvas>
    </div>
  )
}