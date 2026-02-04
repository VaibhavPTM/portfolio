# Portfolio

A modern, responsive portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Tech stack

- **React 19** + **Vite 7** – Fast dev and builds
- **Tailwind CSS v4** – Utility-first styling with custom theme
- **Framer Motion** – Scroll and entrance animations
- **React Router** – Ready for multi-page expansion

## Features

- Single-page layout with smooth scroll navigation
- Responsive nav with mobile menu
- Hero, About, Skills, Projects, Contact, and Footer sections
- Scroll-triggered animations
- Dark theme with amber accent
- Custom fonts (Syne + DM Sans via Google Fonts)

## Customize

1. **Name & tagline** – Edit `src/components/Hero.jsx` (Your Name, subtitle).
2. **About** – Edit `src/components/About.jsx`.
3. **Skills** – Edit the `SKILLS` array in `src/components/Skills.jsx`.
4. **Projects** – Edit the `PROJECTS` array in `src/components/Projects.jsx` (title, description, tags, link).
5. **Contact** – Edit the `LINKS` array in `src/components/Contact.jsx` (email, GitHub, LinkedIn, Twitter URLs).
6. **Footer** – Edit `src/components/Footer.jsx` for name and “Back to top”.
7. **Theme** – Colors and fonts are in `src/index.css` (`@theme` block).

## Commands

```bash
npm install   # Install dependencies
npm run dev   # Start dev server (http://localhost:5173)
npm run build # Production build
npm run preview # Preview production build
```

## Go live

The project is set up for two free hosting options.

### Option 1: Vercel (recommended)

**A. Deploy from your terminal (one-time):**

1. Create a free account at [vercel.com](https://vercel.com).
2. In the project folder, run:
   ```bash
   npx vercel login
   npx vercel --prod
   ```
3. Log in when prompted. Vercel will give you a live URL (e.g. `https://portfolio-xxx.vercel.app`).

**B. Auto-deploy from GitHub (no CLI):**

1. Go to [vercel.com](https://vercel.com) → **Add New…** → **Project**.
2. Import your GitHub repo (`VaibhavPTM/portfolio`).
3. Vercel detects Vite; keep **Build Command**: `npm run build`, **Output Directory**: `dist`.
4. Click **Deploy**. Every push to `main` will auto-deploy.

### Option 2: GitHub Pages

1. Push this repo to GitHub (e.g. repo name: `portfolio`).
2. In the repo: **Settings → Pages** → under "Build and deployment", set **Source** to **GitHub Actions**.
3. Push to the `main` branch. The workflow in `.github/workflows/deploy-pages.yml` will build and deploy.
4. Your site will be at `https://<username>.github.io/portfolio/` (replace `portfolio` with your repo name).

## License

Use and modify as you like for your own portfolio.
