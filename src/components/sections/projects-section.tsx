'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ChevronRight, Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/projects'

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Get only featured projects
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 border border-primary/20 text-primary mb-4"
          >
            My Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold gradient-text mb-4"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore a selection of my recent projects, showcasing my skills and expertise.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="overflow-hidden rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full shadow-sm group-hover:shadow-glow">
                {/* Project image with overlay */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-700"
                  />

                  {/* Tags overlay */}
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-black/50 backdrop-blur-sm text-xs border-none">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm text-xs border-none">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-primary/90 text-primary-foreground border-none">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Project info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button size="sm" variant="ghost" className="h-9 px-3" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5"
                          >
                            <ExternalLink size={14} />
                            <span>Live</span>
                          </a>
                        </Button>
                      )}

                      {project.codeUrl && (
                        <Button size="sm" variant="ghost" className="h-9 px-3" asChild>
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5"
                          >
                            <Github size={14} />
                            <span>Code</span>
                          </a>
                        </Button>
                      )}
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" className="h-9 w-9 p-0" asChild>
                        <Link
                          href={`/projects?id=${project.id}`}
                          aria-label={`View details of ${project.title}`}
                        >
                          <ChevronRight size={18} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button asChild className="px-6 group">
            <Link href="/projects" className="flex items-center gap-2">
              View All Projects
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  )
}