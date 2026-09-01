import {
  Cloud,
  Code2,
  Globe,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and web applications designed for performance, clarity, and business growth.',
    longDescription:
      'We create responsive, conversion-ready websites and web platforms that combine visual polish with strong technical structure. Every build is designed to support your brand, improve customer experience, and scale with your growth goals.',
    bullets: ['Responsive UX', 'Scalable architecture', 'SEO-ready builds'],
    icon: Globe,
    highlight: 'High-impact digital experiences that look premium and perform reliably.',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Helpful, user-friendly mobile experiences built to increase engagement and customer retention.',
    longDescription:
      'We develop mobile experiences tuned for usability, retention, and business efficiency. Whether you need customer-facing apps or internal tools, we build intuitive mobile solutions that support your workflow and your audience.',
    bullets: ['iOS & Android support', 'Cross-platform strategy', 'Retention-first UX'],
    icon: MonitorSmartphone,
    highlight: 'Mobile products that keep users engaged and move your business forward.',
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    description: 'Workflow-driven software built to improve operations, automate processes, and reduce bottlenecks.',
    longDescription:
      'Prime Connect builds custom software that fits your internal systems, business logic, and team structure. From tools that reduce repetitive work to dashboards that improve visibility, our software helps teams operate smarter.',
    bullets: ['Custom dashboards', 'Internal tooling', 'Operational efficiency'],
    icon: Code2,
    highlight: 'Tailored software systems designed around your exact business process.',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Beautiful design systems and user journeys that bring more clarity and conversion to your brand.',
    longDescription:
      'Good design does more than look appealing — it clarifies decisions, builds trust, and helps users complete key actions with confidence. We create elegant experiences that support both your brand identity and your business goals.',
    bullets: ['User research', 'Wireframes & prototypes', 'Brand alignment'],
    icon: Sparkles,
    highlight: 'Human-centered design that turns attention into action and action into growth.',
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Modern infrastructure and deployment solutions that improve performance, speed, and stability.',
    longDescription:
      'We build resilient cloud environments and modern DevOps workflows to keep your systems fast, secure, and easier to maintain. Our solutions reduce deployment friction and help your teams move with confidence.',
    bullets: ['Infrastructure setup', 'Automation pipelines', 'System monitoring'],
    icon: Cloud,
    highlight: 'Cleaner deployments, faster releases, and more dependable digital operations.',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protection-focused technology planning with secure system design and ongoing monitoring best practices.',
    longDescription:
      'Security is built into how we plan, design, and deliver solutions. We help safeguard critical data, reduce vulnerable entry points, and create systems that support safer operations from day one.',
    bullets: ['Risk assessment', 'Secure architecture', 'Threat awareness'],
    icon: ShieldCheck,
    highlight: 'Security-first systems built to protect your reputation and your operations.',
  },
]
