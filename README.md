# MTPE Landing Page - Slovenian Translation Service

A modern, single-page landing page for Machine Translation Post-Editing (MTPE) services, built with React, Tailwind CSS, and designed for Netlify deployment.

## 🚀 Features

- **Interactive 3-Question Quiz** - Helps visitors determine the right translation approach for their needs
- **Netlify-Ready Contact Form** - No backend required, form submissions handled by Netlify
- **Dark Theme with Teal/Cyan Accents** - Modern, professional design
- **Fully Responsive** - Optimized for all device sizes
- **Smooth Scrolling** - Anchor navigation throughout the page
- **Accessible** - Built with accessibility best practices

## 📋 Sections

1. Hero - Main value proposition with CTAs
2. When AI Helps/Hurts - Educational content about AI translation
3. Comparison Table - 4 translation approaches compared
4. MTPE Process - 5-step process visualization
5. Interactive Quiz - 3 questions leading to personalized recommendation
6. Trust - 4 trust-building elements
7. FAQ - 12 common questions with accordion
8. About - Company information
9. Contact Form - Netlify-ready form with file upload option
10. Footer - Contact info, disclosures, and links

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Tailwind CSS** - Styling
- **Vite** - Build tool (via CRACO for CRA compatibility)
- **Shadcn UI** - Component library
- **Lucide React** - Icons

## 📝 Configuration

All editable content placeholders are centralized in `/src/config.js`:

```javascript
export const CONFIG = {
  MAIN_SITE_URL: 'https://example.com',
  COMPANY_NAME: 'Vaše Podjetje d.o.o.',
  CONTACT_EMAIL: 'info@example.com',
  CONTACT_PHONE: '+386 1 234 5678',
  FREE_SAMPLE_LIMIT: '500',
  LANG_PAIRS: 'EN↔SL, DE↔SL, IT↔SL, HR↔SL',
  TURNAROUND_LINE: '24-72 ur, odvisno od obsega',
  PRICING_LINE: 'od 0.06 EUR/besedo za MTPE light'
};
```

Simply edit this file to update your company information, pricing, and other details across the entire site.

## 🖼️ Images

Placeholder images are located in `/public/images/`:
- `hero.png` - Hero section background/illustration
- `process.png` - MTPE process diagram
- `trust.png` - Trust section illustration

Replace these with your actual images before deployment.

## 🚀 Deployment to Netlify

### Option 1: Drag & Drop (Simplest)

1. Build the project:
   ```bash
   cd frontend
   yarn build
   ```

2. Go to [Netlify](https://app.netlify.com/)
3. Drag the `build` folder to Netlify's deployment area
4. Your site is live!

### Option 2: Git Integration (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket

2. In Netlify dashboard:
   - Click "Add new site" → "Import an existing project"
   - Connect your repository
   - Configure build settings:
     - **Base directory**: `frontend`
     - **Build command**: `yarn build`
     - **Publish directory**: `frontend/build`

3. Click "Deploy site"

### Option 3: Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   cd frontend
   yarn build
   netlify deploy --prod --dir=build
   ```

## 📧 Contact Form Setup

The contact form is pre-configured for Netlify Forms. After deployment:

1. Go to your Netlify dashboard
2. Navigate to "Forms" tab
3. You'll see form submissions appear here
4. Set up email notifications in Netlify settings

**Important**: The form includes:
- Name (required)
- Email (required)
- Company
- Language Pair (required)
- Project Description (required)
- File/URL link

## 🔧 Development

### Prerequisites
- Node.js 16+
- Yarn

### Local Development

1. Install dependencies:
   ```bash
   cd frontend
   yarn install
   ```

2. Start development server:
   ```bash
   yarn start
   ```

3. Open http://localhost:3000

### Build for Production

```bash
yarn build
```

The optimized production build will be in the `build` folder.

## ✅ Pre-Deployment Checklist

- [ ] Update `/src/config.js` with your actual information
- [ ] Replace placeholder images in `/public/images/`
- [ ] Test the quiz functionality
- [ ] Test the contact form (after deployment)
- [ ] Check all anchor links work (#quiz, #contact)
- [ ] Verify responsive design on mobile/tablet
- [ ] Update meta tags in `/public/index.html` (title, description)
- [ ] Add favicon

## 🔍 SEO Optimization

Update these in `/public/index.html`:

```html
<title>MTPE - Strojno Prevajanje z Naknadnim Urejanjem</title>
<meta name="description" content="Kakovostni prevodi hitreje in po nižji ceni. MTPE združuje AI hitrost s človeško natančnostjo." />
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🆘 Troubleshooting

### Build fails
- Clear cache: `rm -rf node_modules yarn.lock && yarn install`
- Check Node version: `node -v` (should be 16+)

### Form not working
- Verify `data-netlify="true"` attribute is present
- Check Netlify Forms are enabled in dashboard
- Make sure hidden `form-name` field exists

### Images not loading
- Verify images are in `/public/images/`
- Check file names match exactly (case-sensitive)

## 📄 License

This project is proprietary software.

## 🤝 Support

For technical support or questions, refer to CONFIG values in `/src/config.js`
