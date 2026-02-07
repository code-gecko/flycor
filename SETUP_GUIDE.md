# Flycorp Farms Website - Complete Source Code

This is the complete source code for your Flycorp Farms website built with React, TypeScript, and Tailwind CSS.

## 🗂️ Project Structure

```
flycorp-website/
├── src/
│   ├── components/
│   │   ├── home/              # Homepage sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ProductsSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── PartnersSection.tsx
│   │   │   ├── InstagramSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   └── ui/                # Reusable UI components (shadcn/ui)
│   ├── pages/                 # Page components
│   │   ├── Index.tsx          # Homepage
│   │   ├── Shop.tsx
│   │   ├── Tours.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── OurFarm.tsx
│   │   └── NotFound.tsx
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   ├── App.tsx                # Main app component with routing
│   ├── main.tsx               # App entry point
│   └── index.css              # Global styles & Tailwind setup
├── public/                    # Static assets
├── package.json               # Dependencies
├── vite.config.ts             # Vite configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **React Router** - Client-side routing
- **Tanstack Query** - Data fetching
- **Radix UI** - Accessible component primitives

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or pnpm

### Step 1: Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

### Step 2: Run Development Server

```bash
# Using npm
npm run dev

# Using bun
bun run dev
```

Your website will be available at `http://localhost:8080`

### Step 3: Build for Production

```bash
# Using npm
npm run build

# Using bun
bun run build
```

The production build will be in the `dist/` folder.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Option 2: Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Update `vite.config.ts` base to your repo name
4. Run: `npm run build && npm run deploy`

### Option 4: Any Static Host
Upload the contents of the `dist/` folder to any static hosting service:
- AWS S3 + CloudFront
- Google Cloud Storage
- Firebase Hosting
- Cloudflare Pages

## 🎨 Customization

### Colors
Edit `src/index.css` and `tailwind.config.ts` to change the color scheme.

### Content
- Homepage sections: `src/components/home/`
- Pages: `src/pages/`
- Header/Footer: `src/components/layout/`

### Routes
Add/modify routes in `src/App.tsx`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## 🔧 Configuration Files

- `vite.config.ts` - Vite settings (base path is set to '/flycorp/')
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript compiler options
- `components.json` - shadcn/ui configuration

## 📱 Features

- Fully responsive design
- SEO-ready
- Accessible components
- Dark mode support (configured in Tailwind)
- Optimized for performance

## 🆘 Troubleshooting

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port already in use
Change the port in `vite.config.ts`:
```ts
server: {
  port: 3000, // Change this number
}
```

## 📄 License

This is your project - use it however you want!

## 🤝 Support

For questions about the code, refer to:
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Documentation](https://ui.shadcn.com)
