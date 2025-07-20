# Personal Portfolio Website - Replit.md

## Overview

This is a modern, professional personal portfolio website for Antônio Joaquim Pereira Monteiro Silva, a Computer Science student at CEUB Asa Norte. The application is built as a full-stack web application with a React frontend and Express backend, showcasing professional skills, education, and projects in an interactive, visually appealing format.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Query for server state, React Context for theme management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: Drizzle ORM configured for PostgreSQL (via Neon Database)
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Development**: Hot module replacement with Vite integration

### Design System
- **Color Palette**: Monochromatic grayscale with subtle accent colors (blue/green gradients)
- **Typography**: Inter font family for modern, professional appearance
- **Theme**: Light/dark mode support with system preference detection
- **Responsive**: Mobile-first design with breakpoint-based layouts

## Key Components

### Core Portfolio Sections
1. **Hero Section**: Introduction with name, title, and call-to-action
2. **About Section**: Personal information, background, and contact details
3. **Skills Section**: Technical skills categorized by type (programming languages, tools, soft skills)
4. **Education Timeline**: Chronological education history with interactive timeline
5. **Portfolio Build Section**: Technical details about how the website was built
6. **Projects Section**: Placeholder for future project showcases
7. **Contact Section**: Contact form with social media links

### Interactive Features
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Scroll Animations**: Intersection Observer-based animations on scroll
- **Theme Toggle**: Light/dark mode switching with persistence
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu
- **Microinteractions**: Hover effects, button animations, and loading states

### Component Architecture
- **UI Components**: Reusable Shadcn/ui components (Button, Card, Badge, etc.)
- **Section Components**: Modular sections for easy maintenance
- **Layout Components**: Navigation, Footer, and page structure
- **Utility Components**: Theme provider, toast notifications, mobile detection

## Data Flow

### Client-Side Flow
1. **App.tsx**: Root component with providers (QueryClient, Theme, Tooltip)
2. **Portfolio Page**: Main page component orchestrating all sections
3. **Section Components**: Individual sections with scroll animation setup
4. **UI Components**: Reusable components with consistent styling

### Animation System
- **Scroll Observer**: Intersection Observer for triggering animations
- **CSS Classes**: `.animate-on-scroll` and `.in-view` for animation states
- **Staggered Animations**: Delayed animations for visual hierarchy

### Theme System
- **Context Provider**: Centralized theme state management
- **Local Storage**: Theme preference persistence
- **CSS Variables**: Dynamic color switching via custom properties

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Icons**: Lucide React icons, React Icons for brand logos
- **Forms**: React Hook Form with Zod validation
- **Database**: Drizzle ORM, Neon Database serverless
- **Development**: Vite, TypeScript, ESBuild

### Styling Dependencies
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: Component variant management
- **CLSX**: Conditional class name utility
- **PostCSS**: CSS processing with Autoprefixer

### Animation & Interaction
- **CSS Transitions**: Smooth hover and state transitions
- **Scroll Animations**: Custom Intersection Observer implementation
- **Microinteractions**: Button ripple effects, loading states

## Deployment Strategy

### Development Environment
- **Replit Integration**: Configured for Replit development environment
- **Hot Reload**: Vite HMR for fast development iteration
- **Environment Variables**: Database URL and configuration via env vars

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles Express server to `dist/index.js`
3. **Static Assets**: Frontend assets served by Express in production

### Production Deployment
- **Node.js Server**: Express serves both API routes and static files
- **Database**: PostgreSQL via Neon Database serverless
- **Environment**: Production mode with optimized builds

### Content Management
- **Static Content**: All portfolio content is hardcoded for performance
- **Personal Information**: Easily updatable through component props
- **Responsive Assets**: Images and icons optimized for different screen sizes

## Technical Decisions

### React Over Plain HTML
- **Rationale**: Enables component reusability, state management, and modern development practices
- **Benefits**: Type safety with TypeScript, hot reload, modern tooling
- **Trade-offs**: Slightly larger bundle size but better maintainability

### Tailwind CSS Design System
- **Rationale**: Rapid development with consistent design tokens
- **Benefits**: Utility-first approach, responsive design, dark mode support
- **Implementation**: Custom color palette, component variants, responsive breakpoints

### Monolithic Frontend
- **Rationale**: Simple deployment and development for portfolio site
- **Benefits**: Single codebase, shared components, consistent styling
- **Future**: Could be split into separate apps if scaling requirements change

### No Authentication System
- **Rationale**: Portfolio site doesn't require user authentication
- **Current State**: Contact form submission (placeholder for external service)
- **Future**: Could add admin panel for content management if needed