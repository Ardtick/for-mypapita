# Overview

This is a full-stack TypeScript application built with React and Express, featuring a love questionnaire interactive experience. The application uses a modern tech stack with Vite for frontend tooling, shadcn/ui for component library, Tailwind CSS for styling, and Drizzle ORM for database operations. The project follows a monorepo structure with shared schemas and clear separation between client and server code.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool and development server
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management with custom query client configuration
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system variables and "new-york" style configuration
- **Animations**: Framer Motion for interactive animations and transitions

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Development**: Hot reload with custom Vite integration for seamless development experience

## Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Management**: Shared schema definitions between client and server using Drizzle and Zod
- **Validation**: Zod schemas for runtime type validation and form validation with React Hook Form
- **Storage Interface**: Abstracted storage layer with both memory-based implementation for development and production database support
- **Migrations**: Drizzle Kit for database schema migrations

## Development Architecture
- **Monorepo Structure**: Organized into `client/`, `server/`, and `shared/` directories
- **Build System**: Vite for frontend bundling, esbuild for backend bundling
- **Type Safety**: Comprehensive TypeScript configuration with strict mode enabled
- **Path Aliases**: Configured aliases for clean imports (`@/`, `@shared/`, `@assets/`)
- **Development Tools**: Runtime error overlay and Replit-specific development tooling

## Authentication & Session Management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **User Model**: Basic user schema with username/password authentication structure
- **Security**: Prepared for secure authentication implementation with password hashing

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database with `@neondatabase/serverless` driver
- **Connection**: Environment-based database URL configuration for different environments

## UI & Design
- **Radix UI**: Comprehensive set of accessible, unstyled UI components
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets including Font Awesome icons
- **Google Fonts**: External font loading for typography (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)

## Form & Validation
- **React Hook Form**: Form state management and validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation schemas

## Animation & Interaction
- **Framer Motion**: Animation library for smooth transitions and interactive elements
- **Embla Carousel**: Carousel/slider component implementation

## Development & Build Tools
- **Vite Plugins**: React plugin, runtime error modal, and Replit-specific development tools
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production builds

## Utility Libraries
- **clsx & class-variance-authority**: Conditional CSS class management
- **date-fns**: Date manipulation and formatting
- **cmdk**: Command palette/search interface component
- **nanoid**: Unique ID generation for session management

## External Media
- **Catbox.moe**: External audio file hosting for background music functionality