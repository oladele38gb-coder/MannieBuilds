export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Mannie transformed our fintech platform into a work of art. The combination of editorial typography and lightning-fast WebSockets architecture doubled our conversion rate within 30 days of launch.",
    author: "Elena Rostova",
    role: "VP of Product",
    company: "Kroma Financial",
    metric: "+240% Active Users"
  },
  {
    id: 'test-2',
    quote: "Working with Emmanuel is like having a creative director, lead designer, and principal engineer wrapped in one single person. He delivered our telehealth app 2 weeks ahead of deadline with zero compromises.",
    author: "Dr. Marcus Vance",
    role: "Co-Founder & CEO",
    company: "Aether Health",
    metric: "89% Booking Completion"
  },
  {
    id: 'test-3',
    quote: "The automation pipelines Mannie engineered eliminated over 35 manual hours every single week. Our team went from spending afternoons doing data entry to running fully autonomous onboarding.",
    author: "Sarah Lin",
    role: "Head of Operations",
    company: "Pulse Metrics",
    metric: "35 hrs/wk Saved"
  }
];
