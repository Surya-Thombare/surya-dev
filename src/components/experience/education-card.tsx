import { BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface EducationProps {
  education: {
    school: string
    degree: string
    fieldOfStudy: string
    startDate: string
    endDate: string
    description: string
  }
}

export default function EducationCard({ education }: EducationProps) {
  return (
    <Card className="overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <BookOpen size={18} className="text-primary" />
            <h3 className="text-xl font-bold">{education.degree}</h3>
          </div>
          <p className="text-lg">{education.school}</p>
          <p className="text-sm text-muted-foreground">
            {education.startDate} - {education.endDate}
          </p>
        </div>

        <div>
          <p className="text-muted-foreground">{education.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}