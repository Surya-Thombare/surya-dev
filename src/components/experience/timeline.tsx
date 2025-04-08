'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Building } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Experience } from '@/data/experience'

interface TimelineProps {
  experiences: Experience[]
}

export default function Timeline({ experiences }: TimelineProps) {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id)
  }

  return (
    <div className="relative space-y-8">
      {/* Vertical timeline line */}
      <div className="absolute left-8 top-6 bottom-0 w-px bg-border md:left-1/2 md:-ml-px"></div>

      {experiences.map((experience, index) => {
        const isExpanded = expandedExperience === experience.id
        const isOdd = index % 2 === 0

        return (
          <div key={experience.id} className="relative">
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-primary"></div>
            </div>

            <div className={`flex flex-col ${isOdd ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:gap-8`}>
              {/* Date indicator */}
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:text-right pl-16 md:pl-0 md:pr-8">
                <div className={`inline-block py-1 px-3 bg-secondary/10 rounded-md ${isOdd ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  {experience.startDate} – {experience.endDate || 'Present'}
                </div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full md:w-1/2 pl-16 md:pl-8 md:pr-0"
              >
                <Card className="overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <div className="flex items-center text-lg text-muted-foreground">
                          <Building size={16} className="mr-2" />
                          {experience.company}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {experience.location}
                        </p>
                      </div>
                      <div>
                        <Badge variant="outline">
                          {experience.type}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {experience.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="font-medium">Key Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {isExpanded
                          ? experience.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))
                          : experience.achievements.slice(0, 3).map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))
                        }
                        {!isExpanded && experience.achievements.length > 3 && (
                          <li className="list-none text-primary font-medium cursor-pointer" onClick={() => toggleExpand(experience.id)}>
                            + {experience.achievements.length - 3} more achievements
                          </li>
                        )}
                      </ul>
                    </div>

                    {isExpanded && experience.projects && (
                      <div className="mt-6 space-y-4">
                        <h4 className="font-medium">Projects:</h4>
                        <div className="space-y-4">
                          {experience.projects.map((project, i) => (
                            <div key={i} className="bg-secondary/10 p-4 rounded-md">
                              <h5 className="font-medium mb-2">{project.name}</h5>
                              <p className="text-sm text-muted-foreground mb-3">
                                {project.description}
                              </p>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                {project.achievements.map((achievement, j) => (
                                  <li key={j}>{achievement}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {experience.achievements.length > 3 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(experience.id)}
                        className="mt-4 w-full flex items-center justify-center gap-1"
                      >
                        {isExpanded ? (
                          <>
                            Show Less <ChevronUp size={16} />
                          </>
                        ) : (
                          <>
                            Show More <ChevronDown size={16} />
                          </>
                        )}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        )
      })}
    </div>
  )
}