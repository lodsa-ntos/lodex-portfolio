# LodeX Studio — Personal Portfolio

<!-- /center removed -->

[![Live Website](https://img.shields.io/badge/🌐_Live_Website-lodexstudio.com-blue?style=for-the-badge)](https://lodexstudio.com)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 🧪 Personal portfolio, frontend experiments, and UI/UX notes

<!-- /center removed -->

## 🌟 Overview

This is my hobby/personal portfolio — a place to share what I’m learning and building.
You’ll find small projects, UI/UX experiments, and a few case-study notes built with React + Tailwind.

**🎯 Key Highlights:**

- 📱 Mobile-first responsive design
- ⚡ Performance-optimized React application
- 🎨 Modern UI/UX with smooth animations
- 📊 SEO-optimized with analytics integration
- 🔒 GDPR-compliant privacy features

## ⭐ Star this Repository

If this project helps or inspires you, please consider giving it a star! ⭐ It helps other developers discover this work.

## 🎯 Projects

### 🏥 [Gestos Amáveis - Healthcare Platform](https://lodexstudio.com/gestosamaveis)

**Result:** 200% increase in appointment bookings

- Modern healthcare booking system
- Mobile-responsive design
- Performance optimization (3s load time reduction)

### 📚 [Academic Projects Portfolio](https://lodexstudio.com/academico)

- University assignment showcases
- Technical documentation examples
- Code quality demonstrations

## 🧰 What I build

- Small web apps and components
- Landing page concepts
- UI/UX prototypes and motion studies
- Articles and notes on frontend

## ✨ Features

### 🎨 **Design & User Experience**

- Modern, responsive design with mobile-first approach
- Smooth animations with Framer Motion
- Clean, professional UI with TailwindCSS
- Accessibility-focused components

### 📱 **Sections**

- Projects (personal, academic, and concepts)
- Blog (short notes and tutorials)
- About (background and goals)
- Contact (say hi)

### 🔧 **Technical Stack**

- **Frontend**: React 19.1.0 + Vite 7.0.4
- **Styling**: TailwindCSS 3.4.17
- **Animations**: Framer Motion 12.23.12
- **Icons**: React Icons 5.5.0
- **Forms**: React Toastify for notifications
- **Email**: Nodemailer with Zoho SMTP
- **Deployment**: Vercel

### 📊 **SEO & Performance**

- GA4 + Plausible (optional)
- Per-page meta + Open Graph
- Schema.org (Person, WebSite, ImageObject, Article)
- Sitemap and robots.txt
- Image alt text and descriptive filenames

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

```text
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

## 🔧 Configuration (optional)

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

Contact forms can be wired to an email provider (e.g., Zoho SMTP) if needed.

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

### Legal

- Privacy Policy
- Terms of Service
- Cookie Policy

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

### Adding New Experiments

1. Add a page/component under `src/pages/`
2. Wire a route in `src/App.jsx`
3. Update sitemap if public

## 📞 Contact

- **Email**: <lodexstudio@gmail.com>
- **Website**: <https://lodexstudio.com>
- **GitHub**: [lodsa-ntos/lodex-portfolio](https://github.com/lodsa-ntos/lodex-portfolio)

## 📄 License

© 2025 Lodney Santos — LodeX Studio

All content and images © their respective owner (me). You’re welcome to browse the code and learn.

Allowed:

- Use small snippets for learning with attribution.

Not allowed:

- Reuse the full design or content as-is for commercial purposes.
- Redistribute the full codebase.

## 🌟 GitHub Stats

![GitHub repo size](https://img.shields.io/github/repo-size/lodsa-ntos/lodex-portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/lodsa-ntos/lodex-portfolio)
![GitHub issues](https://img.shields.io/github/issues/lodsa-ntos/lodex-portfolio)
![GitHub stars](https://img.shields.io/github/stars/lodsa-ntos/lodex-portfolio)

## 🏷️ Topics

`portfolio` `react` `vite` `tailwindcss` `frontend` `ui-ux` `experiments` `responsive-design` `javascript` `performance` `seo` `portugal`

## 🌍 Connect & Follow

- [![Website](https://img.shields.io/badge/Website-lodexstudio.com-2ea44f?logo=google-chrome&logoColor=white)](https://lodexstudio.com)
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-Lodney%20Santos-0077B5?logo=linkedin&logoColor=white)](https://linkedin.com/in/lodney-santos)
- [![Email](https://img.shields.io/badge/Email-lodexstudio@gmail.com-D14836?logo=gmail&logoColor=white)](mailto:lodexstudio@gmail.com)
- [![Instagram](https://img.shields.io/badge/Instagram-@lodex.studio-E4405F?logo=instagram&logoColor=white)](https://www.instagram.com/lodex.studio/)
- [![Instagram](https://img.shields.io/badge/Instagram-itslodneysantos-purple?logo=instagram&logoColor=white)](https://www.instagram.com/itslodneysantos/)

---

<!-- center removed -->

⭐ Star this repo if it helped you! • 🍴 Fork it to customize for your own use

Built with ❤️ by LodeX Studio — Modern Web Development & UI Design

<!-- /center removed -->
