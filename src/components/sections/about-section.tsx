'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight, Code, Cpu, Layout, Server } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Code size={20} />,
      title: 'Clean Code',
      description: 'Writing readable, maintainable, and scalable code that follows best practices.'
    },
    {
      icon: <Layout size={20} />,
      title: 'Responsive Design',
      description: 'Creating interfaces that work perfectly on any device and screen size.'
    },
    {
      icon: <Server size={20} />,
      title: 'API Integration',
      description: 'Seamlessly connecting frontend applications with backend services.'
    },
    {
      icon: <Cpu size={20} />,
      title: 'Performance Optimization',
      description: 'Building lightning-fast applications with optimized loading times.'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 border border-primary/20 text-primary mb-4"
          >
            About Me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold gradient-text"
          >
            Turning Ideas into Digital Reality
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image and cards side */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square w-full max-w-md mx-auto lg:ml-0 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 mix-blend-overlay"></div>
                <Image
                  src="/profile.jpg"
                  alt="Surya Thombare"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-5 -bottom-5 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -left-8 -top-8 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>

              {/* Experience badge */}
              <div className="absolute -right-4 top-10 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-3 shadow-lg">
                <p className="text-sm font-medium">Experience</p>
                <p className="text-2xl font-bold gradient-text">4+ Years</p>
              </div>

              {/* Projects completed badge */}
              <div className="absolute -left-4 bottom-10 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-3 shadow-lg">
                <p className="text-sm font-medium">Projects</p>
                <p className="text-2xl font-bold gradient-text">20+</p>
              </div>
            </motion.div>
          </div>

          {/* Content side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  I&apos;m a Full Stack Developer with nearly 4 years of experience building high-quality web applications. My journey in software development has been driven by a passion for creating efficient, scalable, and user-friendly digital experiences.
                </p>

                <p>
                  I specialize in modern JavaScript frameworks and libraries like React, Next.js, and Node.js. My experience spans from developing responsive user interfaces to implementing complex backend functionality with database integration.
                </p>

                <p>
                  Currently working at DraftEQ as a Fullstack Developer, I focus on building scalable applications using Supabase and React. Previously, I&apos;ve worked with companies like Tech Sierra and Alpha5 Exchange, developing a variety of projects from e-commerce platforms to cryptocurrency exchanges.
                </p>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Personality traits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-3 mt-8"
              >
                <div className="flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                  <span className="text-sm">Problem Solver</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                  <span className="text-sm">Fast Learner</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                  <span className="text-sm">Team Player</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                  <span className="text-sm">Detail-Oriented</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8"
              >
                <Button variant="outline" className="group" asChild>
                  <Link href="/experience" className="flex items-center gap-2">
                    View Full Experience
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}