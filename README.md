# Product Catalog

A modern Vue 3 application showcasing a virtual-scrolling product catalog with real-time search functionality.

## Features

- 🚀 Built with Vue 3 and TypeScript
- 📦 Virtual scrolling for optimal performance
- 🔍 Real-time product search
- 💫 Smooth animations and transitions
- 📱 Responsive design
- 🎨 Clean and modern UI

## Tech Stack

- Vue 3
- TypeScript
- Vite
- SCSS
- Composition API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Vue components
│   └── Product/     # Product-related components
├── composables/     # Vue composables (hooks)
├── styles/          # Global styles
├── types/           # TypeScript type definitions
└── App.vue          # Root component
```

## Features in Detail

### Virtual Scrolling

The application implements efficient virtual scrolling to handle large lists of products without performance degradation. Only the visible items and a small buffer are rendered at any time.

### Search Functionality

Real-time search across:
- Product titles
- Descriptions
- Brands

### Responsive Design

The application is fully responsive and works well on:
- Desktop computers
- Tablets
- Mobile devices

### Performance Optimizations

- Virtual scrolling for handling large lists
- Debounced search input
- Optimized animations
- Memoized components
- Efficient DOM updates