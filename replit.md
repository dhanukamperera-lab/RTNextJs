# RanasTech Interiors & Maintenance - Project Setup

## Overview
Next.js application for RanasTech Interiors & Maintenance, a Dubai-based interior design and maintenance company. Successfully configured for Replit environment.

## Project Structure
- **Framework**: Next.js 14.2.5 with TypeScript
- **Port**: 5000 (configured for Replit proxy)
- **Build System**: Static export ready for deployment
- **Routing**: App Router with `/` (home) and `/contact` routes

## Development
- Development server runs on `npm run dev -- --port 5000 --hostname 0.0.0.0`
- Configured to work with Replit's proxy environment
- All images are unoptimized for static export compatibility

## Deployment
- Configured for autoscale deployment
- Build command: `npm run s3:export` (creates static export)
- Serves static files from `out/` directory

## Recent Changes (Sept 8, 2025)
- Installed all dependencies
- Configured Next.js for Replit environment
- Set up Frontend Server workflow on port 5000
- Configured deployment settings for static export
- Verified application loads correctly in development

## Project Architecture
- Modern Next.js App Router structure
- TypeScript configuration with path aliases
- Static export optimized for S3/CDN deployment
- Responsive design for interior design showcase