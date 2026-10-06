# Trailmark Supply

A two-brand storefront for outdoor gear. Browse products, open a product page,
and review the details of equipment from Northstar Gear and Canyon Works. The
catalogue combines commerce prices with editorial descriptions through a small
mock storefront service. Its calls take 60 ms and return independent data copies.
Purchases are demonstrations; nothing is persisted.

## Requirements
Node.js 24 or newer and npm 11.

## Run locally
```bash
npm ci
npm run dev
```
Open http://localhost:3000. No environment variables or external services are needed.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm test` | Vitest suite (does not type-check) |
| `npm run typecheck` | Strict TypeScript checks |
| `npm run lint` | ESLint |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run test:watch` | Vitest in watch mode |

Amounts in the commerce feed are decimal dollar strings. Storefront models use
integer cents. All prices are USD, before tax.
