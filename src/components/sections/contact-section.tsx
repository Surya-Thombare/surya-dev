'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Linkedin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/5"></div>

        {/* Glow effects */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Let&apos;s Connect
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out if you have any questions, want to collaborate,
            or just want to say hello!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to Start a Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                I&apos;m currently available for freelance projects, full-time positions,
                or consulting work. Let&apos;s create something amazing together.
              </p>

              <Button size="lg" className="rounded-full px-6 shadow-glow" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Me <ArrowRight size={18} />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col items-center md:items-start gap-6">
              <h4 className="text-lg font-medium">Connect with me</h4>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:suryathombre000@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="bg-card border border-border rounded-full p-2 group-hover:border-primary/50 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span>suryathombre000@gmail.com</span>
                </a>

                <a
                  href="https://github.com/Surya-Thombare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="bg-card border border-border rounded-full p-2 group-hover:border-primary/50 transition-colors">
                    <FaGithub size={18} />
                  </div>
                  <span>github.com/Surya-Thombare</span>
                </a>

                <a
                  href="https://linkedin.com/in/surya-thombre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="bg-card border border-border rounded-full p-2 group-hover:border-primary/50 transition-colors">
                    <Linkedin size={18} />
                  </div>
                  <span>linkedin.com/in/surya-thombre</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}