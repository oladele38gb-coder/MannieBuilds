export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  technologies: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Development',
    shortDesc: 'Digital products engineered for peak speed, flawless responsiveness, and sub-second loading performance.',
    fullDesc: 'Custom full-stack web applications, headless commerce storefronts, and marketing platforms built with Next.js, React, TypeScript, and modern API architectures. Every line of code is optimized for SEO, accessibility, and 90+ Lighthouse performance.',
    deliverables: [
      'Next.js & React Web Applications',
      'Headless Shopify & E-Commerce Flagships',
      'Interactive WebGL & GSAP Motion Experiences',
      'API Integration & Database Architecture',
      'Performance Optimization & Lighthouse 95+'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind']
  },
  {
    id: 'ui-ux-design',
    number: '02',
    title: 'UI/UX Design',
    shortDesc: 'Interfaces that feel natural, purposeful, and engineered to convert your ideal audience.',
    fullDesc: 'Editorial digital design systems, web dashboards, and mobile application experiences crafted with rigorous typography scale, intuitive user flows, and intentional micro-interactions that elevate brand positioning.',
    deliverables: [
      'SaaS & Web Application Interface Design',
      'Design Systems & UI Token Libraries',
      'Mobile iOS & Android UX Architecture',
      'Wireframing, Interactive Prototypes & User Research',
      'Conversion Rate Optimization (CRO)'
    ],
    technologies: ['Figma', 'Design Systems', 'Tokens', 'User Testing', 'Micro-Animations']
  },
  {
    id: 'automation',
    number: '03',
    title: 'Automation Engineering',
    shortDesc: 'Self-healing workflows and AI pipelines that eliminate repetitive friction and scale operations automatically.',
    fullDesc: 'Custom backend automation pipelines connecting your CRMs, billing systems, database queues, and AI models (OpenAI/Gemini). Streamline user onboarding, webhook routing, and internal operations so your team can focus on growth.',
    deliverables: [
      'Event-Driven Webhook & API Pipelines',
      'AI & LLM Integration (OpenAI, Claude, Gemini)',
      'Automated Billing, Stripe & SaaS Provisioning',
      'Database Sync & n8n / Make Workflow Engines',
      'Custom Slack / Telegram Operations Bots'
    ],
    technologies: ['Node.js', 'n8n', 'Python', 'OpenAI API', 'Stripe Webhooks', 'PostgreSQL']
  },
  {
    id: 'product-strategy',
    number: '04',
    title: 'Product Strategy',
    shortDesc: 'Bridging high-end aesthetic vision with business objectives, conversion architecture, and market fit.',
    fullDesc: 'Strategic guidance for founders and ambitious teams. From defining MVP core features and technical roadmaps to audit analysis, positioning strategy, and user journey mapping designed for venture-backed growth.',
    deliverables: [
      'Technical Architecture & Stack Selection',
      'MVP Scope Definition & Feature Prioritization',
      'UX & Conversion Audit Reports',
      'Design-to-Development Handoff Strategy',
      'Scalability & Infrastructure Planning'
    ],
    technologies: ['Architecture', 'System Design', 'UX Audits', 'Product Roadmapping']
  }
];
