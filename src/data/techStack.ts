export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend & DB' | 'Automation & AI' | 'Motion & Craft';
  role: string;
  description: string;
  level: string;
}

export const TECH_STACK: TechItem[] = [
  {
    name: 'Next.js',
    category: 'Frontend',
    role: 'Production Web Framework',
    description: 'Server components, static site generation, and optimized edge routing for sub-second page performance.',
    level: 'Expert'
  },
  {
    name: 'React',
    category: 'Frontend',
    role: 'UI Library & Component Architecture',
    description: 'Modular state management, custom hooks, and high-performance component rendering trees.',
    level: 'Expert'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    role: 'Type-Safe Application Core',
    description: 'Strict type safety across API payloads, design tokens, and scalable enterprise codebases.',
    level: 'Expert'
  },
  {
    name: 'Node.js',
    category: 'Backend & DB',
    role: 'Server Environment & REST APIs',
    description: 'Asynchronous event loops, microservice routing, and webhooks processing engines.',
    level: 'Advanced'
  },
  {
    name: 'Supabase',
    category: 'Backend & DB',
    role: 'Realtime Backend & Auth',
    description: 'PostgreSQL database instances, row-level security policies, and instant WebSocket listeners.',
    level: 'Advanced'
  },
  {
    name: 'Firebase',
    category: 'Backend & DB',
    role: 'Cloud Infrastructure & Auth',
    description: 'NoSQL Firestore databases, serverless cloud functions, and authentication identity flows.',
    level: 'Advanced'
  },
  {
    name: 'PostgreSQL',
    category: 'Backend & DB',
    role: 'Relational Database Engine',
    description: 'Complex SQL queries, relational data modeling, indexing, and high-concurrency transactions.',
    level: 'Advanced'
  },
  {
    name: 'OpenAI API',
    category: 'Automation & AI',
    role: 'Generative Intelligence Pipelines',
    description: 'Custom GPT prompt orchestration, dynamic embeddings, fine-tuning, and automated content engines.',
    level: 'Advanced'
  },
  {
    name: 'Stripe API',
    category: 'Automation & AI',
    role: 'Global Payment & Billing Infra',
    description: 'Subscription billing pipelines, custom checkout flows, and automated webhook revenue processing.',
    level: 'Expert'
  },
  {
    name: 'GSAP',
    category: 'Motion & Craft',
    role: 'High-Performance Motion Suite',
    description: 'Hardware-accelerated ScrollTrigger sequences, editorial text reveals, and fluid timeline choreography.',
    level: 'Expert'
  },
  {
    name: 'Framer Motion',
    category: 'Motion & Craft',
    role: 'React Component Motion Engine',
    description: 'Layout animations, gesture recognition, modal transitions, and responsive spring physics.',
    level: 'Expert'
  }
];
