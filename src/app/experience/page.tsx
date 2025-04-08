'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Timeline from '@/components/experience/timeline'
import EducationCard from '@/components/experience/education-card'
import { experiences, education } from '@/data/experience'

export default function ExperiencePage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/" className="flex items-center gap-1">
              <ChevronLeft size={16} /> Back to Home
            </Link>
          </Button>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold gradient-text mb-4"
          >
            Professional Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground mb-8 max-w-3xl"
          >
            My professional journey as a full stack developer, showcasing my career progression,
            key responsibilities, and notable achievements.
          </motion.p>
        </div>

        <div className="space-y-16">
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-8"
            >
              Work History
            </motion.h2>

            <Timeline experiences={experiences} />
          </section>

          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-bold mb-8"
            >
              Education
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <EducationCard education={edu} />
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-2xl font-bold mb-8"
            >
              Professional Development
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-secondary/10 rounded-lg p-6 border border-border/50">
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>AttainU Full Stack Web Development (2021)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>React Native Development - Expo (2022)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Advanced JavaScript Concepts (2023)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 rounded-lg p-6 border border-border/50">
                <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Currently exploring Web3 development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Regular participation in tech meetups and workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Contributing to open-source projects</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  )
}