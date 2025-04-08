export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string | null; // null for current positions
  description: string;
  achievements: string[];
  skills: string[];
  projects?: {
    name: string;
    description: string;
    achievements: string[];
  }[];
}

export const experiences: Experience[] = [
  {
    id: 'drafteq',
    title: 'Fullstack Developer',
    company: 'DraftEQ',
    location: 'Remote',
    type: 'Full-time',
    startDate: 'Aug 2024',
    endDate: null,
    description: 'Working as a Fullstack Developer with a focus on Supabase and React development, building secure and scalable applications.',
    achievements: [
      'Architected role-based authentication system with Supabase Auth, integrating SMTP/SMS providers and MFA, achieving 99.9% security compliance',
      'Developed 15+ custom Edge Functions for real-time data processing and third-party integrations, reducing response time by 45%',
      'Implemented complex migrations and RLS policies using Supabase CLI, optimizing query performance by 30%',
      'Engineered scalable file management system with Supabase Storage, handling 1TB+ media assets with automated optimization',
      'Architected and implemented complex workflow builder using React Flow, achieving 40% improvement in interaction'
    ],
    skills: ['Supabase', 'React', 'Next.js', 'TypeScript', 'PostgreSQL', 'React Flow'],
  },
  {
    id: 'tech-sierra',
    title: 'React Frontend Developer',
    company: 'Tech Sierra',
    location: 'Thane, Maharashtra, India',
    type: 'Full-time',
    startDate: 'Dec 2021',
    endDate: 'Jul 2024',
    description: 'Led frontend development for multiple client projects using React and related technologies.',
    achievements: [
      'Spearheaded frontend development and mentored junior team, driving 35% user engagement and 25% productivity gains',
      'Led cross-functional development of React/Redux applications, implementing engineering best practices'
    ],
    skills: ['React', 'Redux', 'React Native', 'JavaScript', 'TypeScript', 'CSS', 'HTML'],
    projects: [
      {
        name: 'YouVet',
        description: 'Mobile application for veterinary services',
        achievements: [
          'Architected reusable UI components in React Native Expo with Clerk authentication, improving development efficiency by 40%',
          'Integrated Google Maps API and data visualization charts, achieving 99% mobile responsiveness'
        ]
      },
      {
        name: 'KornFerry',
        description: 'Web application for HR services',
        achievements: [
          'Enhanced web accessibility by making webpages compliant with WCAG guidelines, utilizing tools such as Accessibility Insights for Web and color contrast checkers',
          'Created dynamic report generation system using react-pdf, reducing report creation time by 50%',
          'Operated effectively in an Agile environment, participating in daily scrum calls, providing regular status updates, and adapting to changing project requirements, Utilized Jira software for project management'
        ]
      },
      {
        name: 'Hudini',
        description: 'Hotel management system',
        achievements: [
          'Developed PWA for hotel check-in, reducing guest wait times by 25%',
          'Implemented real-time data synchronization, achieving 99.9% system reliability'
        ]
      }
    ]
  },
  {
    id: 'alpha5',
    title: 'React Frontend Developer',
    company: 'Alpha5 Exchange',
    location: 'Remote',
    type: 'Full-time',
    startDate: 'Jan 2021',
    endDate: 'Jul 2021',
    description: 'Developed frontend interfaces for cryptocurrency exchange platform.',
    achievements: [
      'Gained in-depth knowledge of cryptocurrency markets and blockchain technology',
      'Studied cryptocurrency trading, market trends, strategies, and risk management'
    ],
    skills: ['React', 'JavaScript', 'CSS', 'HTML', 'Cryptocurrency', 'Trading Platforms'],
  }
];

export const education = [
  {
    school: 'AttainU',
    degree: 'Fullstack Development Bootcamp',
    fieldOfStudy: 'Web Development',
    startDate: '2021',
    endDate: '2021',
    description: 'Intensive program focused on modern web technologies including JavaScript, React, Node.js, and databases.',
  },
  {
    school: 'Siddhartha College of Arts, Science and Commerce',
    degree: 'Higher Secondary Education',
    fieldOfStudy: 'Science Stream',
    startDate: '2016',
    endDate: '2018',
    description: 'Completed higher secondary education with a focus on science subjects.',
  }
];