'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '@/data/skills'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TechIcon from '@/components/ui/tech-icon'

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].name)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 border border-primary/20 text-primary mb-4"
          >
            My Tech Stack
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold gradient-text mb-4"
          >
            Skills & Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            I&apos;ve worked with a variety of technologies in the web development world.
            Here&apos;s a snapshot of my technical expertise.
          </motion.p>
        </div>

        <Tabs defaultValue={skillCategories[0].name} className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-2 mb-10 mx-auto">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className="text-sm py-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <div ref={ref} className="bg-card/20 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView && activeTab === category.name ? "visible" : "hidden"}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      custom={index}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 flex items-center justify-center bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl mb-3 hover:border-primary/50 hover:shadow-glow transition-all duration-300">
                        <TechIcon name={skill.name} size={36} />
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  )
}