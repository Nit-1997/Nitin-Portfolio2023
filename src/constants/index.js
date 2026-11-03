import shipt from '../assets/brands/shipt.webp';
import cvsHealth from '../assets/brands/cvs-health.webp';
import cisco from '../assets/brands/cisco.webp';
import sabre from '../assets/brands/sabre.webp';
import northeastern from '../assets/brands/northeastern.webp';
import northeasternSeal from '../assets/brands/northeastern-seal.webp';
import jssstu from '../assets/brands/jssstu.webp';
import kubernetes from '../assets/brands/kubernetes.webp';
import forbes from '../assets/brands/forbes.webp';
import health100 from '../assets/brands/health100.svg';

export const SITE_URL = 'https://nitinbhat.info';
export const EMAIL = 'ntnbhat9@gmail.com';
export const RESUME_URL = 'https://drive.google.com/file/d/1QZ9KJaHmgoy1qxLZVc1xRJpG3RaQE54G/view?usp=sharing';

export const socials = {
  linkedin: 'https://www.linkedin.com/in/nit-1997/',
  github: 'https://github.com/Nit-1997',
  x: 'https://x.com/ntnbhat',
};

export const links = {
  health100: 'https://www.health100.com/',
  forbes: 'https://www.forbes.com/sites/brucejapsen/2026/03/05/cvs-health-and-google-launch-ai-business-to-personalize-healthcare/',
  fierce: 'https://www.fiercehealthcare.com/health-tech/cvs-unveils-health-100-its-new-google-powered-consumer-engagement-platform',
};

export const navLinks = [
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'education', title: 'Education' },
  { id: 'contact', title: 'Contact' },
];

export const brandStrip = [
  { id: 'shipt', name: 'Shipt', logo: shipt, height: 'h-8 sm:h-9' },
  { id: 'cvs', name: 'CVS Health', logo: cvsHealth, height: 'h-[18px] sm:h-[22px]' },
  { id: 'cisco', name: 'Cisco', logo: cisco, height: 'h-8 sm:h-9' },
  { id: 'sabre', name: 'Sabre', logo: sabre, height: 'h-[18px] sm:h-[22px]' },
  { id: 'northeastern', name: 'Northeastern University', logo: northeastern, height: 'h-[22px] sm:h-7' },
];

export const stats = [
  { id: 'americans', value: '25M+', label: 'Americans on the AI platform I launched' },
  { id: 'records', value: '1B+', label: 'patient records summarized' },
  { id: 'savings', value: '$3.4M', label: 'saved per year by one feature' },
  { id: 'webex', value: '30M', label: 'Webex users on my search engine' },
];

export const experiences = [
  {
    id: 'shipt',
    company: 'Shipt',
    logo: shipt,
    logoHeight: 'h-8',
    title: 'Staff AI Engineer, Agentic Commerce',
    start: '2026-09',
    dates: 'Sep 2026 to now',
    location: 'SF Bay Area',
    points: [
      ['Leading AI engineering for agentic shopping, including the next ', 'Ask Shipt'],
      ['', 'MCP apps', ' that bring Shipt into ChatGPT, Claude, Muse and Instinct'],
      ['An ', 'eval harness', ' that tests every agent at scale before release'],
      ['', 'Glayvin', ': a governed AI developer platform for the whole company'],
    ],
  },
  {
    id: 'cvs',
    company: 'CVS Health',
    logo: cvsHealth,
    logoHeight: 'h-[22px]',
    title: 'Staff Engineer, Applied AI',
    start: '2024-06',
    end: '2026-09',
    dates: 'Jun 2024 to Sep 2026',
    location: 'Sunnyvale, CA',
    ladder: ['Senior Engineer', 'Tech Lead', 'Staff Engineer'],
    points: [
      ['Led and launched ', 'Health100', ", CVS Health's agentic AI platform with Google", links.health100],
      ['Voice and text health agent on ', 'Google ADK, LangGraph and A2A'],
      ['', '1B+ records', ' summarized, quality gated by LLM-judge evals'],
      ['', '$3.4M a year', ' saved with real-time insurance checks'],
      ['Named inventor on a ', 'patent (filed)', ' for health records orchestration'],
    ],
    featured: [
      {
        id: 'health100',
        url: links.health100,
        logo: health100,
        logoAlt: 'Health100',
        label: 'Health100',
        title: 'The agentic health platform I led and launched with Google.',
        source: 'health100.com',
      },
      {
        id: 'forbes',
        url: links.forbes,
        logo: forbes,
        logoAlt: 'Forbes',
        title: 'CVS Health and Google launch AI business to "personalize healthcare"',
        source: 'Forbes · Mar 2026',
      },
      {
        id: 'fierce',
        url: links.fierce,
        wordmark: true,
        title: 'CVS unveils Health 100, its new Google-powered consumer engagement platform',
        source: 'Fierce · Mar 2026',
      },
    ],
  },
  {
    id: 'cisco',
    company: 'Cisco',
    logo: cisco,
    logoHeight: 'h-9',
    title: 'Software Engineer II',
    start: '2020-01',
    end: '2022-08',
    dates: 'Jan 2020 to Aug 2022',
    location: 'Bangalore',
    ladder: ['Intern', 'Engineer I', 'Engineer II'],
    points: [
      ['', 'Webex search', ' for 30M users, 30% faster queries'],
      ['', 'Kafka as a Service', ' for 1K tenants at 99.9% uptime'],
      ['Kubernetes operators and admission webhooks in Go'],
    ],
  },
];

export const earlierRoles = [
  { id: 'sabre', company: 'Sabre', role: 'SWE Intern, 2023' },
  { id: 'comportement', company: 'Comportement', role: 'UI Intern, 2019' },
  { id: 'farmguide', company: 'FarmGuide', role: 'Backend Intern, 2018' },
  { id: 'crive', company: 'Crive', role: 'Full Stack Intern, 2018' },
];

export const projects = [
  {
    id: 'open-agent-bot',
    name: 'Open Agent Bot',
    tag: 'Open source · 2026',
    sold: false,
    description: 'A personal research agent that answers with live widgets and full reports. Multi-user, with encrypted keys.',
    stack: 'Next.js · Node · Supabase',
    url: 'https://github.com/Nit-1997/open-agent-bot',
    cta: 'GitHub',
  },
  {
    id: 'clinical-model-accuracy',
    name: 'Clinical Model Accuracy',
    tag: 'Research · 2025',
    sold: false,
    description: 'Benchmarks and fine-tunes that make clinical predictions cheaper to run.',
    stack: 'Python · LLMs',
    url: 'https://github.com/Nit-1997/Clinical-Model-Accuracy-Experiments',
    cta: 'GitHub',
  },
  {
    id: 'prepzone',
    name: 'PrepZone',
    tag: 'Sold licenses',
    sold: true,
    description: 'A coding practice platform with remote execution in 5+ languages, licensed to students.',
    stack: 'React · Node · Docker',
    url: 'https://prepzone.netlify.app/',
    cta: 'Live demo',
  },
  {
    id: 'clinby',
    name: 'Clinby',
    tag: 'Sold to 2 clinics',
    sold: true,
    description: 'White-label websites for physiotherapists, sold to two practices.',
    stack: 'React · Node',
    url: 'https://github.com/Nit-1997/clinby',
    cta: 'GitHub',
  },
];

export const education = [
  {
    id: 'northeastern',
    logo: northeasternSeal,
    logoAlt: 'Northeastern University',
    score: '3.905',
    outOf: '/ 4',
    title: 'MS Computer Science',
    detail: 'Northeastern University, Boston · 2024',
  },
  {
    id: 'sjce',
    logo: jssstu,
    logoAlt: 'JSS Science and Technology University',
    score: '8.71',
    outOf: '/ 10',
    title: 'BE Computer Science',
    detail: 'SJCE, JSS Science and Technology University, Mysuru · 2020',
  },
  {
    id: 'cka',
    logo: kubernetes,
    logoAlt: 'Kubernetes',
    score: '97',
    outOf: '/ 100',
    title: 'Certified Kubernetes Administrator',
    detail: 'CNCF',
  },
];
