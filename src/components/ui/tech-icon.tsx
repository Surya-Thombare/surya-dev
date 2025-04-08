import React from 'react'
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiRemix,
  SiRedux,
  SiReactrouter,
  SiSupabase,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiRedis,
  SiMysql,
  SiPrisma,
  SiMui,
  SiTailwindcss,
  SiAxios,
  SiGit,
  SiGithub,
  SiJira,
  // SiVisualstudiocode,
  // SiVisualstudio,
  SiFigma,
  SiEclipseide,
  SiAndroidstudio,
  SiDocker,
  SiFirebase,
  SiVercel
} from 'react-icons/si'
import { FaServer } from 'react-icons/fa'
import { IconBaseProps } from 'react-icons'

interface TechIconProps {
  name: string
  size?: number
  className?: string
}

export default function TechIcon({ name, size = 24, className = '' }: TechIconProps) {
  const iconProps: IconBaseProps = {
    size,
    className: `text-primary ${className}`
  }

  // Map technology names to their icons
  const getIcon = (techName: string) => {
    const tech = techName.toLowerCase()

    // JavaScript and frameworks
    if (tech.includes('javascript')) return <SiJavascript {...iconProps} />
    if (tech.includes('typescript')) return <SiTypescript {...iconProps} />
    if (tech.includes('python')) return <SiPython {...iconProps} />
    if (tech.includes('c++')) return <SiCplusplus {...iconProps} />

    // HTML/CSS
    if (tech.includes('html')) return <SiHtml5 {...iconProps} />
    if (tech.includes('css')) return <SiCss3 {...iconProps} />

    // Frontend frameworks
    if (tech === 'react' || tech.includes('react native')) return <SiReact {...iconProps} />
    if (tech.includes('next.js')) return <SiNextdotjs {...iconProps} />
    if (tech.includes('remix')) return <SiRemix {...iconProps} />
    if (tech.includes('redux')) return <SiRedux {...iconProps} />
    if (tech.includes('react router')) return <SiReactrouter {...iconProps} />

    // Backend & databases
    if (tech.includes('supabase')) return <SiSupabase {...iconProps} />
    if (tech.includes('postgresql')) return <SiPostgresql {...iconProps} />
    if (tech.includes('mongodb')) return <SiMongodb {...iconProps} />
    if (tech.includes('node.js') || tech.includes('nodejs')) return <SiNodedotjs {...iconProps} />
    if (tech.includes('express')) return <SiExpress {...iconProps} />
    if (tech.includes('redis')) return <SiRedis {...iconProps} />
    if (tech.includes('mysql')) return <SiMysql {...iconProps} />
    if (tech.includes('prisma')) return <SiPrisma {...iconProps} />
    if (tech.includes('drizzle')) return <SiMysql {...iconProps} /> // Using MySQL icon as fallback

    // UI frameworks/libraries
    if (tech === 'mui') return <SiMui {...iconProps} />
    if (tech.includes('tailwind')) return <SiTailwindcss {...iconProps} />
    if (tech.includes('shadcn')) return <SiTailwindcss {...iconProps} /> // Using Tailwind icon as fallback
    if (tech.includes('axios')) return <SiAxios {...iconProps} />
    if (tech.includes('react flow')) return <SiReact {...iconProps} /> // Using React icon as fallback
    if (tech.includes('typebot')) return <SiTypescript {...iconProps} /> // Using TypeScript icon as fallback
    if (tech.includes('zustand')) return <SiReact {...iconProps} /> // Using React icon as fallback
    if (tech.includes('zod')) return <SiTypescript {...iconProps} /> // Using TypeScript icon as fallback

    // Developer tools
    if (tech === 'git') return <SiGit {...iconProps} />
    if (tech.includes('github')) return <SiGithub {...iconProps} />
    if (tech.includes('jira')) return <SiJira {...iconProps} />
    // if (tech.includes('vs code')) return <SiVisualstudiocode {...iconProps} />
    // if (tech.includes('visual studio')) return <SiVisualstudio {...iconProps} />
    if (tech.includes('figma')) return <SiFigma {...iconProps} />
    if (tech.includes('gitlens')) return <SiGit {...iconProps} /> // Using Git icon as fallback
    if (tech.includes('eclipse')) return <SiEclipseide {...iconProps} />
    if (tech.includes('android studio')) return <SiAndroidstudio {...iconProps} />

    // Additional technologies
    if (tech.includes('docker')) return <SiDocker {...iconProps} />
    if (tech.includes('firebase')) return <SiFirebase {...iconProps} />
    if (tech.includes('vercel')) return <SiVercel {...iconProps} />

    // Default icon for anything else
    return <FaServer {...iconProps} />
  }

  return getIcon(name)
}