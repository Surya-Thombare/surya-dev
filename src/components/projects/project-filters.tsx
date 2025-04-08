import { useState } from 'react'
import { Check, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface ProjectFiltersProps {
  allTags: string[]
  selectedTags: string[]
  toggleTag: (tag: string) => void
  clearFilters: () => void
}

export default function ProjectFilters({
  allTags,
  selectedTags,
  toggleTag,
  clearFilters
}: ProjectFiltersProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={selectedTags.length > 0 ? "default" : "outline"} className="flex items-center gap-2">
          <Filter size={16} />
          Filter by Technology
          {selectedTags.length > 0 && (
            <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-foreground text-xs text-primary">
              {selectedTags.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Technologies</span>
          {selectedTags.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.preventDefault()
                clearFilters()
                setIsOpen(false)
              }}
              className="h-auto px-2 py-1 text-xs"
            >
              Clear All
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[300px] overflow-y-auto">
          {allTags.map((tag) => (
            <DropdownMenuItem
              key={tag}
              className="flex items-center justify-between cursor-pointer"
              onSelect={(e) => {
                e.preventDefault()
                toggleTag(tag)
              }}
            >
              <span>{tag}</span>
              {selectedTags.includes(tag) && <Check size={16} className="text-primary" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}