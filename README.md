# WebCraft Pro - Website Showcase Platform

A professional website showcase platform built with Vue.js and Bootstrap to help sell websites to customers. This platform features a modern design with stunning visuals and comprehensive functionality to present your web development services.

## 🚀 Features

- **Responsive Design**: Perfect display on all devices using Bootstrap 5
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Website Gallery**: Showcase your portfolio with filtering and detailed project views
- **Contact System**: Professional contact form with validation
- **Team Showcase**: Display your team members and expertise
- **Pricing Plans**: Clear pricing structure for different service tiers
- **Client Testimonials**: Social proof section
- **SEO Optimized**: Built with SEO best practices

## 🛠️ Tech Stack

- **Frontend**: Vue.js 3 + Vue Router
- **Styling**: Bootstrap 5 + Custom CSS
- **Icons**: Bootstrap Icons
- **Fonts**: Google Fonts (Inter)
- **Build Tool**: Vite
- **Development**: Hot Module Replacement

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Home.vue          # Landing page with hero, features, pricing
│   ├── Templates.vue     # Website gallery with filtering
│   ├── About.vue         # Company info, team, values
│   └── Contact.vue       # Contact form and information
├── App.vue               # Main app component with navigation
├── main.js               # App entry point with router setup
└── style.css             # Global styles and Bootstrap customizations
```

## 🎨 Design Features

- **Custom Color Scheme**: Professional gradient-based design
- **Interactive Elements**: Hover effects, animations, and transitions
- **Card-based Layout**: Modern card designs for content organization
- **Typography**: Beautiful typography with Inter font family
- **Icons**: Comprehensive icon usage with Bootstrap Icons

## 🌟 Key Sections

### Home Page
- Hero section with call-to-action
- Feature highlights
- Portfolio preview
- Client testimonials
- Pricing plans
- Contact CTA

### Website Gallery
- Filterable project gallery
- Detailed project modals
- Technology stack display
- Pricing information
- Purchase buttons

### About Page
- Company story and mission
- Team member profiles
- Company values
- Development process
- Statistics and achievements

### Contact Page
- Comprehensive contact form
- Contact information
- Quick action buttons
- FAQ section
- Social media links

## 🔧 Customization

### Colors
The main color scheme uses a beautiful gradient from `#667eea` to `#764ba2`. You can customize colors in the CSS variables:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --primary-color: #667eea;
  --secondary-color: #764ba2;
}
```

### Content
Update the project data in `Templates.vue` to showcase your own websites:

```javascript
projects: [
  {
    id: 1,
    title: 'Your Project Name',
    category: 'ecommerce',
    description: 'Project description',
    price: 2500,
    // ... other properties
  }
]
```

### Team Information
Modify team data in `About.vue` to reflect your actual team members.

### Contact Details
Update contact information in `Contact.vue` and the footer in `App.vue`.

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1200px and up)

## 🚀 Deployment

The project can be deployed to any static hosting service:

- **Netlify**: Connect your Git repository for automatic deployments
- **Vercel**: Zero-config deployment with Git integration
- **GitHub Pages**: Free hosting for public repositories
- **Traditional hosting**: Upload the `dist` folder after building

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you need help with this project, please contact us at info@webcraft.pro

---

**Built with ❤️ by WebCraft Pro Team**