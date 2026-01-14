import type { QuoteConfig, Service, Certification, ServiceArea, Testimonial } from '@/types'

// Form submission configuration
export const QUOTE_CONFIG: QuoteConfig = {
  mode: 'mailto', // Change to 'hosted' or 'serverless' as needed
  recipientEmail: 'hinkle.fab@gmail.com',
  backupEmail: '',
  subjectLine: 'New Quote Request from Website',
  // hostedEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  // serverlessEndpoint: 'https://your-api.com/submit-quote'
}

// Services data
export const SERVICES: Service[] = [
  {
    id: 'welder-certification',
    title: 'Welder Certification',
    icon: 'BadgeCheck',
    description: 'Welder performance qualification testing and certification to current code requirements for your project and industry.',
    detailContent: 'Welder qualification testing and documentation to AWS, ASME, and API requirements, including records and certification packages aligned to project specifications and audit needs.'
  },
  {
    id: 'inspection',
    title: 'Inspection',
    icon: 'Eye',
    description: 'Weld inspection services focused on code compliance, workmanship verification, and clear documentation for stakeholders.',
    detailContent: 'Inspection support for fabrication and field work, including visual examination, verification to applicable codes and project requirements, and professional reporting for closeout and traceability.'
  },
  {
    id: 'qa-qc',
    title: 'QA/QC',
    icon: 'ShieldCheck',
    description: 'Quality assurance and quality control support to reduce rework, improve consistency, and strengthen compliance across welding activities.',
    detailContent: 'QA/QC program support including process verification, hold point planning, documentation control, and alignment to customer standards and ISO-driven workflows where applicable.'
  },
  {
    id: 'training',
    title: 'Training',
    icon: 'GraduationCap',
    description: 'Practical training for welders, inspectors, and teams to build capability, improve outcomes, and meet certification requirements.',
    detailContent: 'Hands-on training and continuing education support tailored to your codes, procedures, and workforce needs, including mentorship and skill development for qualification readiness.'
  },
  {
    id: 'consulting',
    title: 'Consulting',
    icon: 'BriefcaseBusiness',
    description: 'Welding and inspection consulting to help teams plan, execute, and document work to meet project and regulatory expectations.',
    detailContent: 'Consulting support for welding programs, qualification strategy, documentation readiness, and implementation guidance based on current industry codes and standards.'
  }
]


export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cwi',
    title: 'Certified Welding Inspector (CWI)',
    issuer: 'American Welding Society (AWS)',
    description: 'Inspection focused support for code compliance, workmanship verification, and project documentation across structural and piping applications.',
    highlights: [
      'Code focused inspection support',
      'Clear reporting and closeout documentation',
      'Experience across commercial and industrial projects'
    ]
  },
  {
    id: 'cwe',
    title: 'Certified Welding Educator (CWE)',
    issuer: 'American Welding Society (AWS)',
    description: 'Training and mentorship that improves consistency, helps teams qualify, and reduces rework through practical instruction.',
    highlights: [
      'Hands on workforce training',
      'Qualification preparation and coaching',
      'Instructor background in welding and inspection'
    ]
  },
  {
    id: 'certified-welder',
    title: 'Certified Welder',
    issuer: 'AWS aligned performance qualification',
    description: 'Qualified welder with broad field experience in commercial piping systems and specialty work requiring consistent, repeatable results.',
    highlights: [
      'Carbon and stainless piping systems',
      'High purity piping and gas delivery experience',
      'Work performed to project specifications and applicable codes'
    ]
  },
  {
    id: 'journeyman-pipefitter',
    title: 'Journeyman Pipefitter',
    issuer: 'Plumbers & Pipefitters Local Union 286',
    description: 'Journeyman level experience supporting commercial and industrial piping installations across multiple systems and industries.',
    highlights: [
      'Plumbing and HVAC mechanical systems',
      'Pharma, alternative energy, and semi environments',
      'Code driven fabrication and field installation'
    ]
  }
]


// Service areas data
export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'central-texas',
    name: 'Central Texas',
    coverage: '100-mile radius from Austin'
  },
  {
    id: 'south-texas',
    name: 'South Texas',
    coverage: 'San Antonio, Corpus Christi, Houston metro'
  },
  {
    id: 'statewide',
    name: 'Statewide Projects',
    coverage: 'Available for large-scale projects throughout Texas'
  }
]

// Testimonials data
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'Hinkle Inspection & Testing is our go-to third-party partner for welder qualification.  Thomas Hinkle has a wealth of knowledge and has always been more than willing to help my company get where we want to be.',
    author: 'Tucker Moore',
    company: 'Texas Corrugators',
  }
]

// Site metadata
export const SITE_CONFIG = {
  name: 'Hinkle Inspection & Testing',
  tagline: 'Certified Welding Inspector',
  description: 'Professional welding inspection and testing services with certified expertise ensuring structural integrity and compliance with industry standards.',
  url: 'http://hinkletesting.com',
  phone: '(512) 797-5232',
  email: 'hinkle.fab@gmail.com',
  social: {
    // linkedin: 'https://linkedin.com/in/',
    // facebook: 'https://facebook.com/'
  }
}