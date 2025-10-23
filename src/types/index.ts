export interface Service {
  id: string
  title: string
  icon: string // lucide icon name
  description: string
  detailContent?: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  logoUrl?: string
  number?: string
  expiryDate?: string
  description?: string
}

export interface ServiceArea {
  id: string
  name: string
  coverage: string // e.g., "50-mile radius", "Statewide"
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  company?: string
  project?: string
  imageUrl?: string
}

export interface ImageCard {
  id: string
  url: string
  alt: string
  caption?: string
  category?: string
  projectDate?: string
}

export interface QuotePayload {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
  honeypot?: string // Anti-spam field
}

export type QuoteSubmissionMode = 'mailto' | 'hosted' | 'serverless'

export interface QuoteConfig {
  mode: QuoteSubmissionMode
  recipientEmail: string
  backupEmail?: string
  subjectLine: string
  hostedEndpoint?: string // For hosted provider
  serverlessEndpoint?: string // For serverless function
}