'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import gsap from 'gsap'
import { TypeAnimation } from 'react-type-animation'

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    )
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 bg-grid-pattern opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Glow effects */}
        <div className="absolute top-[30%] -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute top-[60%] -right-40 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto z-10 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 border border-primary/20 text-primary shadow-glow">
              Hello, I&apos;m a Full Stack Developer
            </span>
          </motion.div>

          <h1 ref={headingRef} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Building <span className="gradient-text">Digital Experiences</span> with Modern Web Technologies
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
          >
            I&apos;m <span className="font-semibold text-foreground">Surya Thombare</span>, a passionate full stack developer with expertise in{' '}
            <TypeAnimation
              sequence={[
                'React',
                2000,
                'Next.js',
                2000,
                'TypeScript',
                2000,
                'Supabase',
                2000,
                'Node.js',
                2000
              ]}
              wrapper="span"
              speed={50}
              className="text-primary font-medium"
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8 h-12 shadow-glow" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>

            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-primary/20 hover:bg-primary/10" asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-0 left-0 right-0 top-[110%] flex justify-center"
          >
            <motion.a
              href="#about"
              aria-label="Scroll down"
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}