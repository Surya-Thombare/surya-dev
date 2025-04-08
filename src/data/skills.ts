export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string; // Path to icon or emoji
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'C++' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Remix' },
      { name: 'Redux' },
      { name: 'Redux-Toolkit' },
      { name: 'React Native' },
    ],
  },
  {
    name: 'Backend & Databases',
    skills: [
      { name: 'Supabase' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Redis' },
      { name: 'MySQL' },
      { name: 'Drizzle' },
      { name: 'Prisma' },
    ],
  },
  {
    name: 'UI Frameworks & Libraries',
    skills: [
      { name: 'MUI' },
      { name: 'TailwindCSS' },
      { name: 'ShadCN' },
      { name: 'React-pdf' },
      { name: 'Axios' },
      { name: 'React Flow' },
      { name: 'TypeBot' },
      { name: 'Zustand' },
      { name: 'Zod' },
    ],
  },
  {
    name: 'Developer Tools',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Jira' },
      { name: 'VS Code' },
      { name: 'Visual Studio' },
      { name: 'Figma' },
      { name: 'GitLens' },
      { name: 'Eclipse' },
      { name: 'Android Studio' },
    ],
  },
];