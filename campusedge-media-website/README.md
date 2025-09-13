# CampusEdge Media - Professional Marketing Website

A modern, responsive one-page website for CampusEdge Media, a premier tech marketing agency specializing in brand partnerships and influencer marketing.

## 🚀 Features

- **Modern Design**: Apple-inspired clean, minimal, and elegant interface
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Powered by Framer Motion for professional interactions
- **Optimized Performance**: Fast loading times and optimized assets
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: CSS3 with CSS Modules and CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Smooth Scrolling**: React Scroll
- **Build Tool**: Vite
- **Package Manager**: npm

## 🎨 Design System

### Brand Colors
- **Primary**: Deep Navy Blue (#0B1426), Electric Blue (#2563EB)
- **Secondary**: Pure White (#FFFFFF), Light Gray (#F8FAFC)
- **Accent**: Vibrant Orange (#F97316)

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v8 or higher)

## 🚀 Quick Start

### 1. Clone & Install

```bash
# Clone the repository
git clone <repository-url>
cd campusedge-media-website

# Install dependencies
npm install
```

### 2. Development

```bash
# Start development server
npm run dev

# Open browser and navigate to http://localhost:5173
```

### 3. Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation header with glassmorphism
│   ├── Hero.jsx         # Hero section with animated elements
│   ├── CreatorPartners.jsx  # Creator network showcase
│   ├── UniversityPartners.jsx  # University partnerships
│   ├── Services.jsx     # Services and offerings
│   ├── About.jsx        # About and differentiators
│   ├── Contact.jsx      # Contact form and information
│   ├── Footer.jsx       # Footer with links and CTA
│   └── *.css           # Component-specific styles
├── App.jsx             # Main application component
├── App.css             # Application styles
├── index.css           # Global styles and CSS variables
└── main.jsx           # Application entry point
```

## 🎯 Key Sections

### 1. Header/Navigation
- Sticky header with glassmorphism effect
- Smooth scroll navigation
- Responsive mobile menu
- Modern logo with tech-inspired icon

### 2. Hero Section
- Compelling headline and subtitle
- Interactive CTA buttons
- Statistics showcase
- Animated visual cards
- Scroll indicator

### 3. Creator Partners
- Grid layout of YouTuber partners
- Individual creator cards with descriptions
- Hover animations and transitions
- Call-to-action for network joining

### 4. University Partners
- Educational institution partnerships
- Clean card design with hover effects
- Statistics overlay
- Professional presentation

### 5. Services
- Two main services: Brand Partnerships & Influencer Marketing
- Detailed feature lists
- Benefits section with key differentiators
- Strong call-to-action

### 6. About/Why Choose Us
- Key differentiators with statistics
- Achievement highlights
- Mission and vision cards
- Interactive visual elements

### 7. Contact
- Professional contact form with validation
- Contact information cards
- Response time and satisfaction stats
- Form submission handling

### 8. Footer
- Comprehensive site navigation
- Contact information
- Brand tagline and description
- Scroll-to-top functionality

## 🔧 Customization

### Brand Colors
Update CSS variables in `src/index.css`:

```css
:root {
  --primary-dark: #0B1426;
  --primary-blue: #2563EB;
  --accent-orange: #F97316;
  /* Add your custom colors */
}
```

### Content Updates
- **Creator Partners**: Update the `creators` array in `CreatorPartners.jsx`
- **Universities**: Update the `universities` array in `UniversityPartners.jsx`
- **Services**: Modify service descriptions in `Services.jsx`
- **Contact Info**: Update phone number and email in `Contact.jsx`

### Animations
Customize animations in component files using Framer Motion:

```jsx
const customVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/campusedge-media-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px
- **Large Desktop**: > 1024px

## ⚡ Performance Optimization

- **Image Optimization**: Use WebP format when possible
- **Code Splitting**: Implemented with React.lazy() where needed
- **CSS Optimization**: Minified and compressed in production
- **Bundle Analysis**: Run `npm run build` to see bundle size

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt tags for images
- Clean URL structure
- Fast loading times

## 🧪 Testing

```bash
# Run development server for testing
npm run dev

# Build and preview production version
npm run build && npm run preview
```

## 🛠️ Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions

## 📞 Contact Information

For technical support or customization requests:

- **Phone**: +91 7060306195
- **Email**: Contact us through the website form
- **Location**: India

## 📄 License

This project is proprietary to CampusEdge Media. All rights reserved.

## 🤝 Contributing

This is a private project. For any updates or modifications, please contact the development team.

---

**Built with ❤️ for CampusEdge Media - Bridging Brands, Creators & Education**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
