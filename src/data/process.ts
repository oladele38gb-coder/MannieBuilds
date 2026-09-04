export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Uncovering Core Intent & Architecture',
    description: 'We dive deep into your business goals, target audience, competitive landscape, and technical requirements to define a high-impact roadmap.',
    deliverables: ['Strategy Alignment', 'UX Wireframes & User Flows', 'Technical Architecture Map', 'Project Timeline & Scope']
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'High-Impact Editorial Visual Systems',
    description: 'Crafting premium, custom visual interfaces with generous whitespace, bold grotesk typography, and interactive prototypes tailored to impress users.',
    deliverables: ['Figma Design System & Tokens', 'High-Fidelity Interactive Prototypes', 'Responsive Layout Variations', 'Asset Preparation']
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Production-Grade Engineering',
    description: 'Translating design into clean, modular, and maintainable TypeScript/React code with sub-second page loads, SEO metadata, and 60fps animations.',
    deliverables: ['Next.js / React Architecture', 'GSAP & Motion Choreography', 'API & Database Integration', '90+ Lighthouse Performance']
  },
  {
    number: '04',
    title: 'Automate',
    subtitle: 'Streamlining Operations & Workflows',
    description: 'Integrating self-healing backend automations, webhook pipelines, Stripe billing triggers, and AI APIs so your business runs effortlessly 24/7.',
    deliverables: ['Automated Webhook Workflows', 'AI & OpenAI Engine Chains', 'CRM & Billing Sync', 'Error Monitoring & Alerts']
  },
  {
    number: '05',
    title: 'Launch',
    subtitle: 'Deployment & Continuous Precision',
    description: 'Deploying your digital product to high-speed global CDNs with analytics monitoring, domain setup, full documentation, and post-launch support.',
    deliverables: ['Global CDN Deployment', 'SEO & Analytics Verification', 'Handover Documentation', 'Ongoing Optimization Support']
  }
];
