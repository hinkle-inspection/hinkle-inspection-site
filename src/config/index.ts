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
    id: 'visual-inspection',
    title: 'Visual Weld Inspection',
    icon: 'Eye',
    description: 'Comprehensive visual examination of welds to detect surface defects, discontinuities, and compliance with welding codes and standards.',
    detailContent: 'Detailed examination of weld quality, surface finish, and dimensional accuracy according to AWS D1.1 and other applicable standards.'
  },
  {
    id: 'ndt-testing',
    title: 'Non-Destructive Testing',
    icon: 'ScanLine',
    description: 'Advanced NDT methods including ultrasonic, magnetic particle, and liquid penetrant testing to evaluate weld integrity without damaging the component.',
    detailContent: 'Complete NDT services following ASNT and AWS guidelines for critical structural and pressure vessel applications.'
  },
  {
    id: 'documentation',
    title: 'Documentation & Reporting',
    icon: 'FileText',
    description: 'Detailed inspection reports, certification documentation, and compliance verification for project requirements and regulatory standards.',
    detailContent: 'Professional documentation packages including inspection records, test results, and certification letters for submittal and archival.'
  }
]

// Certifications data
export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cwi',
    title: 'Certified Welding Inspector',
    issuer: 'American Welding Society',
    number: 'CWI-12345678',
    expiryDate: '2026-12-31',
    description: 'AWS Certified Welding Inspector with expertise in structural steel, pressure vessels, and piping systems.'
  },
  {
    id: 'scwi',
    title: 'Senior Certified Welding Inspector',
    issuer: 'American Welding Society',
    number: 'SCWI-87654321',
    expiryDate: '2027-06-30',
    description: 'Advanced certification demonstrating extensive field experience and technical knowledge.'
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
    quote: 'Professional, thorough, and detail-oriented. Their inspection reports were comprehensive and helped us maintain project compliance throughout construction.',
    author: 'John Smith',
    company: 'ABC Construction',
    project: 'Commercial Steel Framework - Austin, TX'
  },
  {
    id: 'testimonial-2',
    quote: 'Responsive communication and expert knowledge of welding codes. We trust them with all our critical inspections.',
    author: 'Sarah Johnson',
    company: 'XYZ Industrial',
    project: 'Pipeline Fabrication - Houston, TX'
  },
  {
    id: 'testimonial-3',
    quote: 'Their NDT testing services caught potential issues before they became problems. Highly recommend for any structural welding project.',
    author: 'Mike Rodriguez',
    company: 'Steel Solutions LLC',
    project: 'Bridge Repair - San Antonio, TX'
  }
]

// Site metadata
export const SITE_CONFIG = {
  name: 'Hinkle Inspection & Testing',
  tagline: 'Certified Welding Inspector',
  description: 'Professional welding inspection and testing services with certified expertise ensuring structural integrity and compliance with industry standards.',
  url: 'http://hinkletesting.com',
  phone: '(512) 797-5232',
  email: 'https://hinkle.fab@gmail.com',
  social: {
    // linkedin: 'https://linkedin.com/in/yourprofile',
    // facebook: 'https://facebook.com/yourpage'
  }
}