# Flycorp Farms Website 🌾

A beautiful, modern farm website built with React, TypeScript, and Tailwind CSS.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6.svg)

## 🌟 Features

- **Modern React Stack**: Built with React 18, TypeScript, and Vite
- **Beautiful UI**: Styled with Tailwind CSS and shadcn/ui components
- **Fully Responsive**: Works perfectly on all devices
- **SEO Ready**: Optimized for search engines
- **Fast Performance**: Powered by Vite for lightning-fast development
- **Type Safe**: Full TypeScript support

## 🚀 Live Demo

**Live Site**: [https://mmooossss.lovable.app](https://mmooossss.lovable.app)

## 📦 Installation

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/flycorp-website.git

# Navigate to project directory
cd flycorp-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:8080`

## 🛠️ Built With

- **[React](https://react.dev)** - UI Library
- **[TypeScript](https://www.typescriptlang.org/)** - Type Safety
- **[Vite](https://vitejs.dev)** - Build Tool
- **[Tailwind CSS](https://tailwindcss.com)** - Styling
- **[shadcn/ui](https://ui.shadcn.com)** - UI Components
- **[React Router](https://reactrouter.com)** - Routing
- **[Tanstack Query](https://tanstack.com/query)** - Data Fetching

## 📁 Project Structure

```
flycorp-website/
├── src/
│   ├── components/         # Reusable components
│   │   ├── home/          # Homepage sections
│   │   ├── layout/        # Layout components
│   │   └── ui/            # UI components (shadcn)
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities
│   └── App.tsx            # Main app component
├── public/                # Static assets
└── package.json           # Dependencies
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/flycorp-website)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/flycorp-website)

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains your production build
# Upload it to any static hosting service
```

## 🎨 Customization

### Changing Colors

Edit `src/index.css` and `tailwind.config.ts` to customize the color scheme.

### Adding Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`

### Modifying Content

- Homepage sections: `src/components/home/`
- Header/Footer: `src/components/layout/`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

Made with ❤️ by Flycorp Farms
