export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'react-hooks',
    title: 'React Hooks Platform',
    description: 'A learning platform featuring 41 custom React hooks with interactive demos and practical implementations for interview preparation.',
    image: '/images/projects/react-hooks.png',
    tags: ['Next.js', 'MongoDB', 'TailwindCSS', 'React'],
    liveUrl: 'https://react-hooks.in',
    codeUrl: 'https://github.com/Surya-Thombare/react-hooks',
    featured: true,
  },
  {
    id: 'houselink',
    title: 'Houselink Properties',
    description: 'A real estate platform with a minimalist UI built using Remix and TailwindCSS with EmailJS integration for contact forms.',
    image: '/images/projects/houselink.png',
    tags: ['Remix', 'EmailJS', 'TailwindCSS', 'CSS3'],
    liveUrl: 'https://houselink-properties.com',
    codeUrl: 'https://github.com/Surya-Thombare/houselink',
    featured: true,
  },
  {
    id: 'mh-forts',
    title: 'MH Forts',
    description: 'A showcase of historical forts in Maharashtra with detailed information and virtual tours.',
    image: '/images/projects/mh-forts.png',
    tags: ['React', 'Firebase', 'TailwindCSS'],
    liveUrl: 'https://mh-forts.web.app',
    codeUrl: 'https://github.com/Surya-Thombare/mh-forts',
    featured: false,
  },
  {
    id: 'polls',
    title: 'Polls Application',
    description: 'A real-time polling application that allows users to create and vote on polls with instant results.',
    image: '/images/projects/polls.png',
    tags: ['React', 'Firebase', 'ChartJS'],
    liveUrl: 'https://polls-app.web.app',
    codeUrl: 'https://github.com/Surya-Thombare/polls',
    featured: false,
  },
  {
    id: 'food-ordering',
    title: 'Food Ordering System',
    description: 'A complete food ordering system with restaurant listings, menu management, and order tracking.',
    image: '/images/projects/food-ordering.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: 'https://food-app-demo.vercel.app',
    codeUrl: 'https://github.com/Surya-Thombare/food-ordering',
    featured: false,
  },
  {
    id: 'copy-saver',
    title: 'Copy Saver Extension',
    description: 'A Chrome extension that saves copied text for later use, making it easy to manage and reuse frequently copied content.',
    image: '/images/projects/copy-saver.png',
    tags: ['JavaScript', 'HTML', 'CSS', 'Chrome Extension'],
    codeUrl: 'https://github.com/Surya-Thombare/copy-saver',
    featured: false,
  },
  {
    id: 'ai-cost-calculator',
    title: 'AI Cost Calculator',
    description: 'A utility to calculate and compare costs of using various AI models for different usage patterns.',
    image: '/images/projects/ai-cost-calculator.png',
    tags: ['React', 'TailwindCSS', 'JavaScript'],
    liveUrl: 'https://ai-cost-calculator.vercel.app',
    codeUrl: 'https://github.com/Surya-Thombare/ai-cost-calculator',
    featured: false,
  },
  {
    id: 'link-lite',
    title: 'LinkLite Chrome Extension',
    description: 'A productivity Chrome extension that helps users organize and quickly access their most frequently visited websites.',
    image: '/images/projects/link-lite.png',
    tags: ['JavaScript', 'HTML', 'CSS', 'Chrome Extension'],
    codeUrl: 'https://github.com/Surya-Thombare/link-lite',
    featured: false,
  },
];