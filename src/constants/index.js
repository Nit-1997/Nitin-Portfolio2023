import {
  frontend,
  backend,
  prototyping,
  cisco,
  cvs,
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
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'AI Engineering',
    icon: frontend,
    description: 'LLM-powered systems, RAG pipelines, LangChain/LangGraph agents, and automated evaluation frameworks',
  },
  {
    title: 'Platform Engineering',
    icon: backend,
    description: 'High-scale distributed systems with SpringBoot, reactive programming, and event-driven architectures',
  },
  {
    title: 'Cloud & Observability',
    icon: prototyping,
    description: 'Kubernetes (CKA certified), GCP/AWS infrastructure, Terraform, and org-wide observability libraries',
  },
];

const technologies = {
  'Languages': [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  ],
  'AI / ML': [
    { name: 'LangChain' },
    { name: 'LangGraph' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'PromptFoo' },
    { name: 'Med-Gemma' },
  ],
  'Frameworks': [
    { name: 'SpringBoot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  ],
  'Data & Messaging': [
    { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Cassandra' },
    { name: 'ElasticSearch' },
    { name: 'BigQuery' },
    { name: 'Spanner' },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
    { name: 'ArgoCD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg' },
    { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
    { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
  ],
};

const experiences = [
  {
    title: 'Senior AI Engineer',
    company_name: 'CVS Health',
    icon: cvs,
    iconBg: '#ffffff',
    date: 'May 2024 - Present',
    location: 'Sunnyvale, CA',
    subtitle: 'Tech Lead — Conversational AI Agent Platform',
    points: [
      'Tech lead for CVS Health\'s conversational AI Agent platform',
      'Built Unified Records Platform integrating 2K+ healthcare providers to surface labs, visit summaries, and allergy data across 1B+ health records for 23M Americans',
      'Led the Insurance Network Verification feature end-to-end, preventing $3.4M in annual out-of-network losses',
      'Improved real-time insurance eligibility by 46% via OCR optimization, retries, and circuit-breakers',
      'Architected Chronos, a LangGraph-based AI analytics agent powered by Gemini & BigQuery, cutting manual ops analysis time by 70%',
      'Own the insurance-as-payment component in CVS Health\'s vaccine/MinuteClinic booking flow',
      'Partnered with infra team to self-host Med-Gemma 27B model on-prem with TrueFoundry-based gateway',
      'Designed org-wide observability library adopted by 40+ services, reducing MTTR by 30%',
    ],
  },
  {
    title: 'Software Engineer II',
    company_name: 'Cisco Systems',
    icon: cisco,
    iconBg: '#049fd9',
    date: 'Jan 2020 - Aug 2022',
    location: 'Bangalore, India',
    subtitle: 'Webex Collaboration — Data Analytics Platform',
    points: [
      'Core contributor to Cisco Webex Contact Center\'s search platform (DAL search layer)',
      'Developed Webex Data Search platform\'s query engine serving 30M users; reduced query latency by 30%',
      'Built Kafka as a Service platform (CRDs, Operators, billing) with 99.9% uptime and 1K tenants',
    ],
    links: [
      { label: 'Search API Docs', url: 'https://developer.webex.com/webex-contact-center/docs/getting-started-with-search-api' },
      { label: 'Demo', url: 'https://app.vidcast.io/share/c8c778c5-6659-4145-891a-bafcece29863' },
    ],
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'CVS Health 100 — AI Agent Platform',
    description: 'Core engineer on CVS Health 100, the Google-powered AI consumer engagement platform. Built the Unified Records Platform integrating 2K+ healthcare providers to surface labs, visit summaries, and allergy data across 1B+ records for 23M Americans. Featured in Forbes, Fierce Healthcare, and Google Cloud press.',
    tags: [
      { name: 'Google Cloud' },
      { name: 'LangChain' },
      { name: 'SpringBoot' },
      { name: 'Spanner' },
    ],
    metric: '1B+',
    metricSub: 'health records, 23M Americans',
    type: 'enterprise',
    demo: 'https://www.cvs.com',
    press: [
      { label: 'Forbes', url: 'https://www.forbes.com/sites/brucejapsen/2026/03/05/cvs-health-and-google-launch-ai-business-to-personalize-healthcare/' },
      { label: 'Fierce Healthcare', url: 'https://www.fiercehealthcare.com/health-tech/cvs-unveils-health-100-its-new-google-powered-consumer-engagement-platform' },
      { label: 'Google Cloud', url: 'https://www.googlecloudpresscorner.com/2026-03-05-CVS-Health-and-Google-Cloud-Announce-New-Strategic-Partnership-to-Reimagine-Health-Care-Consumer-Engagement-and-Experiences' },
    ],
  },
  {
    id: 'project-2',
    name: 'Chronos AI Agent',
    description: 'LangGraph-based AI analytics agent powered by Gemini & BigQuery that automates ops queries (cancellations, traffic spikes, anomaly detection) via natural language conversations.',
    tags: [
      { name: 'LangGraph' },
      { name: 'Gemini' },
      { name: 'BigQuery' },
      { name: 'Python' },
    ],
    metric: '70%',
    metricSub: 'manual analysis time reduced',
    type: 'enterprise',
  },
  {
    id: 'project-3',
    name: 'Clinical Model Accuracy Experiments',
    description: 'Benchmarking LLMs in the medical domain — evaluating accuracy, recall, and grounding across clinical tasks using automated LLM-as-a-judge rubric frameworks built on PromptfooDev.',
    tags: [
      { name: 'LLMs' },
      { name: 'PromptFoo' },
      { name: 'Python' },
      { name: 'Med-Gemma' },
    ],
    metric: '27B',
    metricSub: 'parameter models evaluated',
    type: 'open-source',
    repo: 'https://github.com/Nit-1997/Clinical-Model-Accuracy-Experiments',
  },
  {
    id: 'project-4',
    name: 'Clinby',
    description: 'White-labeled portfolio platform for physiotherapists. Built and sold to 2 practicing physiotherapists as a turnkey web presence solution.',
    tags: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Tailwind' },
    ],
    metric: '2',
    metricSub: 'licenses sold to physios',
    type: 'open-source',
    repo: 'https://github.com/Nit-1997/clinby',
  },
  {
    id: 'project-5',
    name: 'Kubernetes Operator & Admission Controller',
    description: 'Custom Kubernetes Operator and Admission Controller written in Go. The operator manages custom resources while the admission controller enforces pod-level policies.',
    tags: [
      { name: 'Go' },
      { name: 'Kubernetes' },
      { name: 'Docker' },
    ],
    metric: 'CKA',
    metricSub: 'certified — scored 97/100',
    type: 'open-source',
    repo: 'https://github.com/Nit-1997/Kuberenetes-Operator',
  },
  {
    id: 'project-6',
    name: 'PrepZone',
    description: 'Full-stack coding platform similar to Leetcode/Hackerrank with remote code execution supporting 5+ programming languages. Built from scratch and sold licenses to college students.',
    tags: [
      { name: 'React' },
      { name: 'MongoDB' },
      { name: 'Docker' },
      { name: 'Node.js' },
    ],
    metric: '5+',
    metricSub: 'languages supported',
    type: 'open-source',
    repo: 'https://github.com/Nit-1997/interviewPrep',
    demo: 'https://prepzone.netlify.app/',
  },
];

export { services, technologies, experiences, projects };
