# Bharathi G - Portfolio Website

## Overview
This is a personal portfolio website for Bharathi G, a MERN Stack Developer. The portfolio showcases skills, experience, projects, and certifications in an interactive and modern web interface.

**Technology Stack:**
- React 18.2.0
- React Router v6 for navigation
- Tailwind CSS for styling
- AOS (Animate On Scroll) for animations
- React Icons for iconography

**Current State:** ✅ Fully configured and running in Replit environment

## Recent Changes (December 2, 2025)
- ✅ Installed npm dependencies
- ✅ Configured environment variables for Replit (PORT=5000, HOST=0.0.0.0)
- ✅ Set up host checking bypass for Replit proxy environment
- ✅ Configured "Start application" workflow on port 5000
- ✅ Verified application is running successfully

## Project Architecture

### Directory Structure
```
├── public/               # Static assets
│   ├── certificates/    # Certificate images
│   ├── images/          # Project images
│   ├── resume/          # Resume files
│   └── index.html       # HTML template
├── src/
│   ├── components/      # React components
│   │   ├── common/      # Shared components (Navbar, Footer, etc.)
│   │   ├── icons/       # Tech icons showcase
│   │   ├── sections/    # Page sections
│   │   └── ui/          # Reusable UI components
│   ├── data/            # Static data (projects, skills, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Main page components
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── package.json         # Dependencies
└── tailwind.config.js   # Tailwind configuration
```

### Key Features
- Single Page Application (SPA) with multiple routes
- Responsive design with Tailwind CSS
- Smooth scroll animations with AOS
- Portfolio sections: Home, About, Skills, Experience, Projects, Contact
- SEO optimized with meta tags and structured data

## Environment Configuration

### Development Environment Variables
- `PORT=5000` - Frontend server port
- `HOST=0.0.0.0` - Bind to all interfaces for Replit
- `DANGEROUSLY_DISABLE_HOST_CHECK=true` - Allow Replit proxy
- `BROWSER=none` - Disable auto-opening browser
- `WDS_SOCKET_PORT=0` - WebSocket configuration for Replit

## Running the Application

### Start Development Server
The workflow "Start application" runs `npm start` and serves the application on port 5000.

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `build/` folder.

## Known Issues
- Minor ESLint warnings in TechIcons.jsx (duplicate keys)
- Unused variables in some components
- React Router future flag warnings (informational only)

These warnings do not affect functionality and can be addressed in future updates.

## Deployment Notes
- Frontend-only application
- Build system: Create React App
- Production deployment configured to serve static files from `build/` directory
