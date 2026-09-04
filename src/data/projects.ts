export interface Project {
  id: string;
  title: string;
  category: 'UI/UX Design' | 'Web Development' | 'Automation Engineering';
  categoryShort: 'UI/UX' | 'Development' | 'Automation';
  subtitle: string;
  year: string;
  client: string;
  role: string;
  thumbnail: string;
  heroImage: string;
  tags: string[];
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  technology: string[];
  results: { metric: string; label: string }[];
}

export const PROJECTS: Project[] = [
  // 1. WEB DEVELOPMENT
  {
    id: "kroma-fintech",
    title: "KROMA OS",
    category: "Web Development",
    categoryShort: "Development",
    subtitle: "Next-Generation Neobank Operating System & Real-Time Analytics Portal",
    year: "2026",
    client: "Kroma Financial Ltd.",
    role: "Lead Full-Stack Architect & Frontend Engineer",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    tags: ["Next.js 14", "TypeScript", "Tailwind", "WebSockets", "GSAP"],
    challenge: "Kroma required a sub-millisecond real-time financial portal capable of streaming 50,000+ daily transactions across global fiat and crypto rails without frame drops or memory leaks.",
    approach: "Engineered a modular, component-driven dashboard utilizing Next.js App Router, dynamic WebSockets connection pooling, and optimized canvas rendering for real-time candlestick telemetry.",
    solution: "Built a sleek obsidian dark interface paired with micro-interactions, low-latency API routes, multi-currency wallet management, and automated fraud-risk scoring engines.",
    outcome: "Delivered an ultra-responsive web platform that processed over $40M in transaction volume within the first quarter post-launch.",
    technology: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "WebSockets", "GSAP"],
    results: [
      { metric: "< 200ms", label: "Global API Latency" },
      { metric: "+240%", label: "Daily Active Users" },
      { metric: "$40M+", label: "Volume Processed" }
    ]
  },
  // 2. UI/UX DESIGN
  {
    id: "aether-health",
    title: "AETHER CARE",
    category: "UI/UX Design",
    categoryShort: "UI/UX",
    subtitle: "AI-Powered Telehealth & Patient Diagnostic Experience",
    year: "2025",
    client: "Aether Health Tech",
    role: "Principal Product Designer",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
    tags: ["Design System", "UI/UX", "Patient Journey", "Figma", "Prototyping"],
    challenge: "Legacy telehealth platforms suffered from complex onboarding, fragmented patient records, and high drop-off rates during appointment scheduling.",
    approach: "Conducted 30+ patient and physician user interviews to restructure the information architecture into a seamless 3-tap consultation workflow with clear visual hierarchy.",
    solution: "Created an accessible, calming UI design system featuring typography-first layouts, soft micro-gestures, ambient lighting indicators, and unified EHR dashboard views.",
    outcome: "Boosted consultation booking completion from 38% to 89% and won European Health Tech Design honors.",
    technology: ["Figma", "Prototyping", "Design Tokens", "User Research", "Design Systems"],
    results: [
      { metric: "89%", label: "Booking Completion" },
      { metric: "4.9/5", label: "Patient Satisfaction" },
      { metric: "-65%", label: "Onboarding Friction" }
    ]
  },
  // 3. AUTOMATION ENGINEERING
  {
    id: "pulse-automation",
    title: "PULSE FLOW",
    category: "Automation Engineering",
    categoryShort: "Automation",
    subtitle: "Autonomous SaaS Operations & Webhook Orchestration Pipeline",
    year: "2026",
    client: "Pulse Metrics Inc.",
    role: "Lead Automation Engineer",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    tags: ["Node.js", "PostgreSQL", "n8n", "OpenAI API", "Stripe Webhooks"],
    challenge: "The client lost 35+ engineer hours per week manually syncing customer billing triggers, CRM records, and automated user onboarding provisions.",
    approach: "Architected an event-driven automation middleware connecting Stripe webhooks, PostgreSQL queue runners, and OpenAI for automated lead enrichment.",
    solution: "Deployed self-healing serverless functions that process multi-step workflows, retry failed webhooks gracefully, and auto-dispatch personalized onboarding alerts via Slack and email.",
    outcome: "Eliminated 100% of manual data entry while cutting customer provisioning time from 4 hours to 3 seconds.",
    technology: ["Node.js", "TypeScript", "n8n", "PostgreSQL", "Stripe API", "OpenAI"],
    results: [
      { metric: "35 hrs/wk", label: "Engineering Time Saved" },
      { metric: "3.1 sec", label: "Instant Provisioning" },
      { metric: "0%", label: "Data Sync Failures" }
    ]
  },
  // 4. WEB DEVELOPMENT
  {
    id: "synapse-ai",
    title: "SYNAPSE AI",
    category: "Web Development",
    categoryShort: "Development",
    subtitle: "Generative AI Workspace & Enterprise Prompt Orchestration Platform",
    year: "2025",
    client: "Synapse Labs",
    role: "Lead Frontend Architect",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
    tags: ["React", "TypeScript", "GSAP", "OpenAI", "Tailwind"],
    challenge: "Building a rich collaborative canvas for enterprise teams to chain AI models, visually debug prompts, and export API pipelines.",
    approach: "Utilized React Flow and custom WebGL shaders to deliver liquid-smooth visual node connections with instant streaming token feedback.",
    solution: "Designed and engineered an ultra-sleek workspace featuring keyboard-first navigation, version-controlled prompt history, and integrated cost tracking.",
    outcome: "Accelerated enterprise prompt engineering workflows by 5x and successfully raised $12M Series A funding.",
    technology: ["React", "TypeScript", "Node.js", "OpenAI API", "GSAP", "CSS Modules"],
    results: [
      { metric: "5x Faster", label: "Prompt Iteration" },
      { metric: "$12M", label: "Series A Raised" },
      { metric: "99.9%", label: "Uptime Reliability" }
    ]
  },
  // 5. UI/UX DESIGN
  {
    id: "velox-mobility",
    title: "VELOX EV",
    category: "UI/UX Design",
    categoryShort: "UI/UX",
    subtitle: "Luxury Electric Vehicle Fleet & In-Car Spatial UI Experience",
    year: "2025",
    client: "Velox Motors Europe",
    role: "Lead Automotive UI/UX Designer",
    thumbnail: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2000&auto=format&fit=crop",
    tags: ["Spatial UI", "Design System", "HMI Design", "Figma", "Motion"],
    challenge: "Designing a distraction-free dual-screen cockpit dashboard for high-performance electric vehicles that adapts dynamically to driving modes.",
    approach: "Implemented strict glanceability ergonomics, high-contrast dark modes, and tactile visual affordances tested under simulated night and sun-glare driving conditions.",
    solution: "Created an intuitive interface with adaptive typography scaling, dynamic range mapping, and gesture-controlled climate controls.",
    outcome: "Awarded European Automotive Interface of the Year 2025.",
    technology: ["Figma", "Prototyping", "Design Systems", "HMI Ergonomics", "After Effects"],
    results: [
      { metric: "0.4 sec", label: "Avg Glance Duration" },
      { metric: "100%", label: "Safety Compliance" },
      { metric: "Awwwards", label: "Site of the Day" }
    ]
  },
  // 6. WEB DEVELOPMENT
  {
    id: "orbit-ecommerce",
    title: "ORBIT STUDIO",
    category: "Web Development",
    categoryShort: "Development",
    subtitle: "Headless 3D E-Commerce Flagship for High-Fashion Luxury Goods",
    year: "2025",
    client: "Orbit Fashion Group",
    role: "Senior Creative Developer",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
    tags: ["Next.js", "Three.js", "Shopify Storefront API", "GSAP", "Lenis"],
    challenge: "Traditional e-commerce templates failed to reflect the brand's haute couture identity and suffered slow 4.5s load times due to unoptimized 3D assets.",
    approach: "Engineered a headless storefront combining Next.js App Router, Shopify GraphQL API, and custom WebGL compression algorithms for instant 3D model streaming.",
    solution: "Designed fluid page transitions, horizontal scroll lookbooks, interactive 360-degree garment inspection, and seamless one-click checkout.",
    outcome: "Increased mobile e-commerce conversion rate by +145% while maintaining a 96/100 Lighthouse performance score.",
    technology: ["Next.js", "TypeScript", "Shopify Storefront API", "Three.js", "GSAP", "Lenis"],
    results: [
      { metric: "+145%", label: "Mobile Conversion" },
      { metric: "0.6s", label: "First Contentful Paint" },
      { metric: "96/100", label: "Lighthouse Score" }
    ]
  },
  // 7. UI/UX DESIGN
  {
    id: "nexus-saas",
    title: "NEXUS CLOUD",
    category: "UI/UX Design",
    categoryShort: "UI/UX",
    subtitle: "Enterprise Cybersecurity Command Center & Threat Visualization UI",
    year: "2025",
    client: "Nexus Security Inc.",
    role: "Principal UX Architect",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop",
    tags: ["UI/UX", "Information Architecture", "Enterprise SaaS", "Figma"],
    challenge: "Security analysts were overwhelmed by dense, unformatted logs, resulting in delayed incident responses during zero-day vulnerability events.",
    approach: "Streamlined visual cognitive load by structuring incident alerts into three priority tiers and introducing progressive detail disclosure.",
    solution: "Delivered an editorial dark-themed command dashboard featuring live node maps, instant threat isolation toggles, and plain-language alert summaries.",
    outcome: "Reduced Mean Time to Detect (MTTD) by 72% across 400+ enterprise security teams.",
    technology: ["Figma", "Information Architecture", "User Testing", "Design System"],
    results: [
      { metric: "-72%", label: "Threat Detection Time" },
      { metric: "400+", label: "Enterprise Teams" },
      { metric: "0", label: "Critical Misses" }
    ]
  },
  // 8. WEB DEVELOPMENT
  {
    id: "strata-realestate",
    title: "STRATA HAVEN",
    category: "Web Development",
    categoryShort: "Development",
    subtitle: "Architectural Real Estate Platform with Dynamic Interactive Floorplans",
    year: "2024",
    client: "Strata Architectural Group",
    role: "Full-Stack Developer & Creative Director",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Mapbox GL", "Supabase", "Framer Motion"],
    challenge: "High-end residential buyers needed an immersive digital portal to filter luxury properties, inspect vector floorplans, and schedule virtual walk-throughs.",
    approach: "Combined Mapbox GL vector tiles with Supabase real-time property tracking and smooth GSAP image sequence scroll animations.",
    solution: "Crafted a refined editorial visual layout with dark mode toggles, instant vector rendering, and automated buyer inquiry routing.",
    outcome: "Generated over $180M in qualified luxury real estate inquiries in 6 months.",
    technology: ["React", "TypeScript", "Supabase", "Mapbox GL", "GSAP", "Tailwind"],
    results: [
      { metric: "$180M+", label: "Property Sales Leads" },
      { metric: "4.2 min", label: "Avg Session Duration" },
      { metric: "+210%", label: "Inquiry Growth" }
    ]
  },
  // 9. UI/UX DESIGN
  {
    id: "lumina-creative",
    title: "LUMINA ART",
    category: "UI/UX Design",
    categoryShort: "UI/UX",
    subtitle: "Digital Art Auction & Fractional Ownership Marketplace",
    year: "2024",
    client: "Lumina Global Art",
    role: "Lead UI/UX Designer",
    thumbnail: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=2000&auto=format&fit=crop",
    tags: ["Fintech UX", "Web3 UI", "Figma", "Design System"],
    challenge: "High-net-worth art collectors found existing Web3 marketplaces intimidating due to complex wallet jargon and unrefined visual branding.",
    approach: "Designed a ultra-premium Web3 experience with traditional auction house aesthetics, hiding complexity behind seamless WebAuthn biometrics.",
    solution: "Constructed editorial bidding rooms, live video streaming interfaces, and verified provenance certificate modals.",
    outcome: "Facilitated $15M in fine art fractional sales within 60 days of launch.",
    technology: ["Figma", "Prototyping", "Design Systems", "UX Research"],
    results: [
      { metric: "$15M", label: "Fractional Sales" },
      { metric: "98%", label: "User Retention" },
      { metric: "Zero", label: "Wallet Friction Drops" }
    ]
  },
  // 10. WEB DEVELOPMENT
  {
    id: "echo-audio",
    title: "ECHO SOUND",
    category: "Web Development",
    categoryShort: "Development",
    subtitle: "Spatial Audio Streaming & Producer Collaboration Suite",
    year: "2024",
    client: "Echo Audio Labs",
    role: "Senior Web Audio Developer",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2000&auto=format&fit=crop",
    tags: ["Web Audio API", "React", "TypeScript", "Node.js", "Firebase"],
    challenge: "Music producers required a web browser tool capable of low-latency multitrack audio playback, stem separation, and live remote co-writing.",
    approach: "Built a custom Web Audio API engine leveraging WebAssembly for real-time DSP effects and Firebase real-time database for sync.",
    solution: "Designed a high-density, dark studio workstation interface with waveform visualization, track grouping, and instant stem export.",
    outcome: "Adopted by 50,000+ independent music producers globally.",
    technology: ["React", "TypeScript", "Web Audio API", "WebAssembly", "Firebase"],
    results: [
      { metric: "50k+", label: "Active Producers" },
      { metric: "< 15ms", label: "Audio Latency" },
      { metric: "4.9/5", label: "App Store Rating" }
    ]
  },
  // 11. UI/UX DESIGN
  {
    id: "prism-logistics",
    title: "PRISM FREIGHT",
    category: "UI/UX Design",
    categoryShort: "UI/UX",
    subtitle: "Global Maritime Logistics & Autonomous Fleet Dispatch System",
    year: "2024",
    client: "Prism Global Logistics",
    role: "Principal UX Designer",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",
    tags: ["Logistics UX", "Enterprise UI", "Figma", "Design Tokens"],
    challenge: "Dispatch managers struggled with fragmented legacy tracking tools, leading to shipping delays and costly route miscalculations.",
    approach: "Unified route optimization, weather telemetry, and container tracking into a single responsive, map-centric interface.",
    solution: "Constructed an adaptive layout with live status badges, automated delay mitigation alerts, and single-click customs document generation.",
    outcome: "Decreased dispatch errors by 88% and optimized container vessel turnaround times.",
    technology: ["Figma", "Enterprise Design System", "Wireframing", "Usability Testing"],
    results: [
      { metric: "-88%", label: "Dispatch Errors" },
      { metric: "1.2M", label: "Containers Managed" },
      { metric: "100%", label: "Dispatcher Adoption" }
    ]
  },
  // 12. WEB DEVELOPMENT
  {
    id: "vortex-edtech",
    title: "VORTEX ACADEMY",
    category: "Web Development",
    categoryShort: "Development",
    subtitle: "Interactive STEM Learning Platform with Real-Time Coding Environment",
    year: "2024",
    client: "Vortex Learning Systems",
    role: "Lead Frontend Developer",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop",
    tags: ["Next.js", "Monaco Editor", "Node.js", "PostgreSQL", "Tailwind"],
    challenge: "Students experienced high drop-off rates on online coding platforms due to slow browser IDE compilation and unengaging video lessons.",
    approach: "Integrated Microsoft Monaco Editor with WebAssembly-based code runners for zero-latency local code execution.",
    solution: "Designed an editorial learning experience with split-screen code execution, automated test grading, and gamified progress tracking.",
    outcome: "Increased course completion rates from 22% to 78%.",
    technology: ["Next.js", "TypeScript", "Monaco Editor", "Node.js", "PostgreSQL"],
    results: [
      { metric: "78%", label: "Course Completion" },
      { metric: "120k+", label: "Active Students" },
      { metric: "0s", label: "IDE Execution Delay" }
    ]
  },
  // 13. UI/UX DESIGN
  {
    id: "zenith-wealth",
    title: "ZENITH PRIVATE",
    category: "UI/UX Design",
    categoryShort: "UI/UX",
    subtitle: "Wealth Management Mobile App for Ultra-High-Net-Worth Investors",
    year: "2024",
    client: "Zenith Private Bank",
    role: "Lead Mobile UI/UX Designer",
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2000&auto=format&fit=crop",
    tags: ["Mobile UI/UX", "Private Banking", "Figma", "Micro-Interactions"],
    challenge: "Private wealth clients needed an exclusive mobile experience to manage multi-asset portfolios, private equity allocations, and concierge messaging.",
    approach: "Focused on understated elegance, high typographic contrast, and discreet security controls designed for effortless usage.",
    solution: "Crafted a bespoke dark mode interface with tactile chart interactions, encrypted advisor chat, and custom financial reporting.",
    outcome: "Won Best Private Banking App 2024 with over $2.5B in managed assets linked.",
    technology: ["Figma", "Mobile UX", "Design System", "Prototyping"],
    results: [
      { metric: "$2.5B+", label: "Assets Linked" },
      { metric: "4.95/5", label: "Client Rating" },
      { metric: "Top Award", label: "Wealth Tech 2024" }
    ]
  }
];
