import {
  frontend,
  backend,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  docker,
  postgresql,
  graphql,
  komikult,
  leaderboard,
  math,
  sabre,
  cisco,
  farmguide, nitin
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Engineering',
    icon: frontend,
  },
  {
    title: 'Infrastructure Engineering',
    icon: backend,
  },
  {
    title: 'Devops',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'redux',
    icon: redux
  }
];

const experiences = [
  {
    title: 'Software Engineering Intern',
    company_name: 'Farmguide',
    icon: farmguide,
    iconBg: '#333333',
    date: 'Jun 2018 - Aug 2018',
  },
  {
    title: 'Software Engineering Intern',
    company_name: 'Cisco',
    icon: cisco,
    iconBg: '#333333',
    date: 'Jan 2020 - Aug 2020',
  },
  {
    title: 'Software Engineer - I',
    company_name: 'Cisco',
    icon: cisco,
    iconBg: '#333333',
    date: 'Aug 2020 - Aug 2021',
  },
  {
    title: 'Software Engineer - II',
    company_name: 'Cisco',
    icon: cisco,
    iconBg: '#333333',
    date: 'Aug 2021 - Aug 2022',
  },
  {
    title: 'Software Engineering Intern',
    company_name: 'Sabre Corporation',
    icon: sabre,
    iconBg: '#333333',
    date: 'May 2023 - Sep 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'prepZone',
    description: '• Created a coding platform from scratch similar to Leetcode/Hackerrank.The platform supported remote code execution\n' +
        'for more than 5 programming languages.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/Nit-1997/interviewPrep',
    demo: 'https://master--exquisite-duckanoo-10cab5.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'Medicare',
    description:
      'A portal to provide a community for verified doctors and patients to give free consulting at scale. Built to bridge the gap between doctors and verified healthcare professionals during covid.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/Nit-1997/Medicare',
    demo: 'https://thriving-faun-5e3077.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'Stock Trading Application',
    description: 'Created a Java-based Stock Trading platform that allows users to manage portfolios, buy/sell stocks, and implement\n' +
        'dollar-cost averaging strategies.\n' +
        '• Implemented design patterns (adapter, builder, facade, and command) and followed SOLID design principles.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nitin,
    repo: 'https://github.com/Nit-1997/Stock_Portfolio',
    demo: 'https://github.com/Nit-1997/Stock_Portfolio',
  }
];

export { services, technologies, experiences, projects };
