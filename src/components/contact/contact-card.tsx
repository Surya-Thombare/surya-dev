'use client'

import { useEffect, useRef } from 'react'
import { MapPin } from 'lucide-react'

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a simplified map implementation
    // In a real application, you would integrate with Google Maps or another map service

    if (mapRef.current) {
      const canvas = document.createElement('canvas')
      canvas.width = mapRef.current.clientWidth
      canvas.height = mapRef.current.clientHeight
      mapRef.current.appendChild(canvas)

      const ctx = canvas.getContext('2d')
      if (ctx) {
        // Draw a stylized map
        ctx.fillStyle = '#1a1a1a'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw some map elements
        ctx.strokeStyle = '#333'

        // Draw grid lines
        for (let i = 0; i < canvas.width; i += 20) {
          ctx.beginPath()
          ctx.moveTo(i, 0)
          ctx.lineTo(i, canvas.height)
          ctx.stroke()
        }

        for (let i = 0; i < canvas.height; i += 20) {
          ctx.beginPath()
          ctx.moveTo(0, i)
          ctx.lineTo(canvas.width, i)
          ctx.stroke()
        }

        // Draw "roads"
        ctx.strokeStyle = '#444'
        ctx.lineWidth = 4

        // Horizontal roads
        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 3)
        ctx.lineTo(canvas.width, canvas.height / 3)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(0, canvas.height * 2 / 3)
        ctx.lineTo(canvas.width, canvas.height * 2 / 3)
        ctx.stroke()

        // Vertical roads
        ctx.beginPath()
        ctx.moveTo(canvas.width / 4, 0)
        ctx.lineTo(canvas.width / 4, canvas.height)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(canvas.width * 3 / 4, 0)
        ctx.lineTo(canvas.width * 3 / 4, canvas.height)
        ctx.stroke()

        // Main intersection highlight
        ctx.fillStyle = 'rgba(0, 200, 200, 0.1)'
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 40, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="relative h-full w-full bg-secondary/20">
      <div ref={mapRef} className="absolute inset-0"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <MapPin size={32} className="text-primary" />
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary/20 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  )
}