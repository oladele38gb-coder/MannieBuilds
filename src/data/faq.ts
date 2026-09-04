export interface FAQItem {
  id: string;
  category: 'Pricing' | 'Timeline' | 'Design' | 'Development' | 'Automation' | 'Support';
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'pricing-1',
    category: 'Pricing',
    question: 'How do you price projects?',
    answer: 'Projects are typically structured as fixed-scope investments based on deliverables, technical complexity, and strategic impact. Full-service digital product projects (Design + Web Development + Automation) usually range between $8,000 and $25,000+. For ongoing advisory or dedicated engineering sprints, monthly retainer models are available.'
  },
  {
    id: 'timeline-1',
    category: 'Timeline',
    question: 'What is the typical timeline for a full product design and build?',
    answer: 'Standard projects take between 4 to 8 weeks from initial discovery call to final deployment. MVP builds or single-service sprints (e.g. custom landing page or automation workflow pipeline) can be completed in 2 to 3 weeks. You receive weekly milestone reviews and transparent Slack/Loom video updates.'
  },
  {
    id: 'design-1',
    category: 'Design',
    question: 'Can you work with our existing branding or design system?',
    answer: 'Absolutely. Whether you already have brand guidelines that need to be elevated into an award-winning digital experience, or require a completely new visual system from scratch, I adapt the typography, spacing grid, and interaction design to reinforce your brand positioning.'
  },
  {
    id: 'development-1',
    category: 'Development',
    question: 'What tech stack do you use for web development?',
    answer: 'My primary stack consists of Next.js / React, TypeScript, Node.js, Supabase / PostgreSQL, and Tailwind CSS / custom CSS tokens for maximum speed and control. Animations are crafted using GSAP and Lenis smooth scroll to guarantee 60fps performance across desktop and mobile devices.'
  },
  {
    id: 'automation-1',
    category: 'Automation',
    question: 'What kind of processes can be automated for my product?',
    answer: 'I design custom backend automation pipelines that handle customer onboarding, webhook routing, invoice generation, CRM syncing, Slack/email notifications, and AI data processing (using OpenAI API/Gemini). This saves teams 20-40+ hours per week in manual labor.'
  },
  {
    id: 'support-1',
    category: 'Support',
    question: 'What happens after the project is launched?',
    answer: 'Every project includes a complimentary 30-day post-launch warranty and technical support period to monitor performance, optimize analytics, and fix any emerging browser edge cases. Extended quarterly maintenance and continuous feature iteration plans are also available.'
  }
];
