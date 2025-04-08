import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform hover:scale-105 duration-500"
        />
        {project.featured && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-auto">
          {project.liveUrl && (
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            </Button>
          )}

          {project.codeUrl && (
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Github size={14} /> View Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}