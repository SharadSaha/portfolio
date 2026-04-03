# Sharad Saha Portfolio

Single-page portfolio built with React, Vite, TypeScript, TailwindCSS, and Framer Motion. The site is fully static and configured for GitHub Pages deployment.

## Stack

- React 19
- Vite
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide React

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build the production bundle:

```bash
npm run build
```

4. Preview the built site locally:

```bash
npm run preview
```

## GitHub Pages deployment

This project uses `base: './'` in [`vite.config.ts`](/Users/Personal/Desktop/work/portfolio/vite.config.ts), so built assets resolve correctly on GitHub Pages.

Recommended deployment flow:

1. Push this repository to GitHub.
2. Run `npm install` and `npm run build`.
3. Upload the generated `dist/` contents to the GitHub Pages publishing source you use.

If you want automated deployment with GitHub Actions, use a workflow that:

1. Checks out the repo
2. Runs `npm ci`
3. Runs `npm run build`
4. Publishes `dist/` to GitHub Pages

## Editing personal URLs and assets

Update [`src/data/portfolio.ts`](/Users/Personal/Desktop/work/portfolio/src/data/portfolio.ts) to change:

- `siteConfig.profileImage`
- `siteConfig.resume`
- `siteConfig.email` and `siteConfig.emailLabel`
- `siteConfig.phone` and `siteConfig.phoneLabel`
- `siteConfig.linkedin` and `siteConfig.linkedinLabel`
- `siteConfig.github` and `siteConfig.githubLabel`

This keeps profile links, contact links, and resume URLs in one place instead of editing multiple sections.

## Content to replace before deployment

- [`public/resume.pdf`](/Users/Personal/Desktop/work/portfolio/public/resume.pdf): replace the placeholder PDF with the real resume.
- [`src/data/portfolio.ts`](/Users/Personal/Desktop/work/portfolio/src/data/portfolio.ts): replace placeholder GitHub and LinkedIn URLs with Sharad Saha's final profile links.
- [`public/assets/profile-placeholder.svg`](/Users/Personal/Desktop/work/portfolio/public/assets/profile-placeholder.svg): replace with a final optimized profile image if available.
