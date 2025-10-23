# Hinkle Inspection & Testing Website

This repository contains the source code for the official website of **Hinkle Inspection & Testing**, a Central Texas Certified Welding Inspector (CWI) service provider.

## Overview
The site is built with **Vue 3 + Vite**
It serves as a professional online presence and lead generation tool for inspection, certification, QA/QC, training, and consulting services.

## Directory Structure
```md
  hinkle-inspection/
  ├── public/
  │   ├── assets/
  │   │   └── gallery/          # Project images (WebP preferred)
  │   ├── favicon.ico
  │   └── robots.txt
  ├── src/
  │   ├── assets/               # Static assets imported by components
  │   ├── components/
  │   │   ├── cards/
  │   │   │   ├── CertificationBadge.vue
  │   │   │   ├── ServiceCard.vue
  │   │   │   └── TestimonialCard.vue
  │   │   ├── forms/
  │   │   │   └── QuoteForm.vue
  │   │   ├── layout/
  │   │   │   ├── AppFooter.vue
  │   │   │   └── NavBar.vue
  │   │   └── sections/
  │   │       └── HeroSection.vue
  │   ├── config/
  │   │   └── index.ts          # Site config, services, certifications, etc.
  │   ├── router/
  │   │   └── index.ts          # Vue Router setup with hash mode
  │   ├── styles/
  │   │   ├── main.scss         # Global styles
  │   │   └── tokens.scss       # Design tokens (colors, spacing, etc.)
  │   ├── types/
  │   │   └── index.ts          # TypeScript interfaces
  │   ├── views/
  │   │   ├── GalleryPage.vue
  │   │   └── HomePage.vue
  │   ├── App.vue
  │   └── main.ts
  ├── .gitignore
  ├── index.html
  ├── package.json
  ├── tsconfig.json
  ├── vite.config.ts
  └── README.md
```
```bash
git clone https://github.com/hinkle-inspection/hinkle-inspection-site.git
cd hinkle-inspection-site
npm install
npm run dev
```