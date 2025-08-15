# LodeX Studio - Portfolio Website

![LodeX Studio](https://lodexstudio.com/LodeX-Studio-Website.jpg)

## 🌟 Overview

Professional portfolio website for LodeX Studio, specializing in modern web development, landing pages, and UI design. Built with React, Vite, and TailwindCSS for optimal performance and user experience.

**Live Website:** [https://lodexstudio.com](https://lodexstudio.com)

## ✨ Features

### 🎨 **Design & User Experience**
- Modern, responsive design with mobile-first approach
- Smooth animations with Framer Motion
- Clean, professional UI with TailwindCSS
- Accessibility-focused components

### 📱 **Portfolio Sections**
- **Hero Section** - Professional introduction and CTA
- **Services** - Detailed service offerings with pricing
- **Portfolio** - Real client projects and case studies
- **Blog** - Technical tutorials and insights
- **About** - Professional background and expertise
- **Contact** - Direct communication channels

### 🔧 **Technical Stack**
- **Frontend**: React 19.1.0 + Vite 7.0.4
- **Styling**: TailwindCSS 3.4.17
- **Animations**: Framer Motion 12.23.12
- **Icons**: React Icons 5.5.0
- **Forms**: React Toastify for notifications
- **Email**: Nodemailer with Zoho SMTP
- **Deployment**: Vercel

### 📊 **SEO & Performance**
- Google Analytics integration
- Enhanced meta tags and Open Graph
- Schema.org structured data
- Sitemap and robots.txt
- Security headers via Vercel
- Optimized loading performance

### 📧 **Contact Forms**
- Project inquiry form with detailed fields
- Service request forms
- Newsletter subscription
- WhatsApp integration

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/lodsa-ntos/lodex-portfolio.git

# Navigate to project directory
cd lodex-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── HeroSection.jsx
│   ├── WorksSection.jsx
│   ├── ExpertiseSection.jsx
│   └── FooterSection.jsx
├── pages/              # Page components
│   ├── LandingPage.jsx
│   ├── blog/
│   ├── projects/
│   ├── services/
│   ├── legal/          # Privacy, Terms, Cookies
│   └── sobre/
├── utils/              # Utility components
│   ├── GlobalContainer.jsx
│   ├── SectionContainer.jsx
│   └── Whatsapp.jsx
├── layout/             # Layout components
│   ├── LayoutGlobal.jsx
│   └── ErrorBoundary.jsx
└── assets/             # Static assets
    ├── expertises/
    ├── tech/
    └── me/

api/                    # Serverless functions
├── send-service.js     # Service inquiry handler
├── start-project.js    # Project form handler
└── newsletter.js       # Newsletter subscription

public/                 # Static files
├── images/
├── sitemap.xml
├── robots.txt
└── favicon files
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Configuration
ZOHO_PASS=your_zoho_app_password
EMAIL_TO=your_email@domain.com

# Google Analytics (optional)
GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Email Setup

The portfolio uses Zoho SMTP for email functionality:

1. Create a Zoho account
2. Generate an app-specific password
3. Add credentials to environment variables

## 📱 Mobile Responsiveness

Fully responsive design with breakpoints:
- **xs**: 320px (Mobile small)
- **sm**: 640px (Mobile medium)  
- **md**: 768px (Tablets)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large desktop)

## 🎨 Design System

### Colors
- **Primary**: Custom blue gradients
- **Secondary**: Professional grays
- **Accent**: Green (#2F9B92)

### Typography
- **Primary**: Satoshi (Headings)
- **Secondary**: Jost (Body text)
- **Accent**: Lobster (Special cases)

## 🔒 Security & Privacy

### Implemented Security Measures
- Security headers via Vercel configuration
- Input validation on all forms
- XSS protection
- CSRF protection
- Content Security Policy headers

### Legal Compliance
- Privacy Policy (GDPR compliant)
- Terms of Service
- Cookie Policy
- Data processing transparency

## 📈 Performance Optimizations

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: WebP format support
- **Lazy Loading**: Implemented for images
- **Minification**: Production builds optimized
- **CDN**: Assets served via Vercel Edge Network

## 🔍 SEO Features

### Technical SEO
- Semantic HTML structure
- Meta tags optimization
- Schema.org structured data
- XML sitemap
- Robots.txt configuration

### Content SEO
- Optimized page titles and descriptions
- Alt text for all images
- Clean URL structure
- Internal linking strategy

## 📊 Analytics & Monitoring

- **Google Analytics 4**: User behavior tracking
- **Core Web Vitals**: Performance monitoring
- **Error Boundary**: Graceful error handling
- **Toast Notifications**: User feedback

## 🚀 Deployment

### Vercel Deployment (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy dist/ folder to your hosting provider
```

## 🛠️ Customization

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update sitemap if public page

### Modifying Styles
- Main styles in `src/index.css`
- TailwindCSS configuration in `tailwind.config.js`
- Component-specific styles inline

### Adding New Services
1. Update `src/pages/services/Services.jsx`
2. Add service data to services array
3. Update pricing in structured data

## 📞 Support & Contact

**Professional Contact:**
- **Email**: lodexstudio@gmail.com
- **Website**: https://lodexstudio.com

**Development:**
- **GitHub**: [lodsa-ntos/lodex-portfolio](https://github.com/lodsa-ntos/lodex-portfolio)
- **Issues**: Please report bugs via GitHub Issues

## 📄 License

© 2025 Lodney Santos - LodeX Studio. All Rights Reserved.

This portfolio is proprietary software. The design, code, and content are protected by copyright. 

**Allowed:**
- Viewing the source code for educational purposes
- Using code snippets as learning examples

**Not Allowed:**
- Commercial use without permission
- Copying design or content in whole or in part.
- Redistribution of the complete codebase

For permissions beyond the scope of this license, contact: lodex.studio@gmail.com

---

**Built with ❤️ by LodeX Studio** | *Modern Web Development & UI Design*
