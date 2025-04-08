'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { experiences } from '@/data/experience'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="experience" className="section-container px-4 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4"
          >
            Professional Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading"
          >
            Work Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A glimpse of my professional experience and the projects I&apos;ve worked on.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {experiences.slice(0, 2).map((experience) => (
            <motion.div key={experience.id} variants={itemVariants}>
              <Card className="overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <p className="text-lg text-muted-foreground">
                        {experience.company} • {experience.location}
                      </p>
                    </div>
                    <div className="text-muted-foreground text-sm md:text-right">
                      <p>{experience.startDate} – {experience.endDate || 'Present'}</p>
                      <Badge variant="outline" className="mt-2">
                        {experience.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {experience.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-medium">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {experience.achievements.slice(0, 3).map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.skills.slice(0, 6).map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                    {experience.skills.length > 6 && (
                      <Badge variant="secondary">+{experience.skills.length - 6} more</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-8"
          >
            <Button asChild>
              <Link href="/experience" className="flex items-center gap-1">
                View Full Experience <ChevronRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}