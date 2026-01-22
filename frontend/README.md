# Frontend - React Portfolio

Professional cybersecurity portfolio built with React, Tailwind CSS, and modern UI components.

## Features

- Responsive dark-themed design
- Smooth scroll navigation
- Interactive components
- GitHub integration
- Contact form functionality

## Development

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## Components

All React components are located in `src/components/`:

- **Header.jsx** - Navigation bar with smooth scroll
- **Hero.jsx** - Landing section with logo and introduction
- **About.jsx** - Personal background and security focus
- **MilitaryExperience.jsx** - Professional military background
- **Skills.jsx** - Technical competencies showcase
- **Projects.jsx** - GitHub integration and future projects
- **Contact.jsx** - Contact form and information
- **Footer.jsx** - Site footer with links
- **BackToTop.jsx** - Scroll to top button
- **ui/** - Shadcn UI components library

## Styling

- **Tailwind CSS** for utility-first styling
- **Custom CSS** in App.css for animations
- **JetBrains Mono** font for headers (terminal feel)
- **Purple accent color**: #8B5CF6

## Environment Variables

Create a `.env` file:

```
REACT_APP_BACKEND_URL=http://localhost:8001
```

## Scripts

- `yarn start` - Development server
- `yarn build` - Production build
- `yarn test` - Run tests
