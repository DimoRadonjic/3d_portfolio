# Dimitrije Radonjić, 3D portfolio

Portfolio site built with React, TypeScript, Vite, Tailwind CSS and react-three-fiber.

## Scripts

- `npm run dev`: dev server on http://localhost:3333
- `npm run build`: type-check and build to `dist/`
- `npm run lint`: ESLint
- `npm run preview`: serve the production build locally

## Deploy (Cloudflare Workers)

The built `dist/` folder is served by Cloudflare Workers static assets. `wrangler.jsonc` points at `dist/` and falls back to `index.html` for unknown routes; `public/_headers` sets the security headers.

Preview the production build on the Workers runtime:

```bash
npm run build
npx wrangler dev
```

Deploys run through Workers Builds on every push to `main`:

1. Cloudflare dashboard → Workers & Pages → Create → Import a repository → pick `DimoRadonjic/3d_portfolio`.
2. Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
3. Add the EmailJS build variables (see below).
4. Optional custom domain: the Worker → Settings → Domains & Routes → Add → Custom domain.

Manual deploy: `npm run build && npx wrangler deploy`.

The contact form reads `VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID` and `VITE_APP_EMAILJS_PUBLIC_KEY` at build time. Add them in the Worker → Settings → Build → Variables and secrets (the same values as on the current host), otherwise the form can't send.
