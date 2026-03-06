# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Partagem** is a West African **space-sharing and co-use platform** (MVP) — NOT a rental platform. Users find spaces to share and contact owners via WhatsApp. The propose form is UI-only (not yet connected to a backend).

**Vocabulary rule**: never use rental/lease language. Use sharing vocabulary instead:
- ~~louer / location / locataire / loyer~~ → partager / partage / cohabitant / contribution
- ~~publier une annonce~~ → proposer un espace
- ~~je suis intéressé par~~ → je souhaite rejoindre l'espace

### Data flow

All data comes from `src/lib/mock/spaces.ts` — an in-memory array of `Espace` objects. There is no backend or database. The `getEspaceById` helper is the only query function.

### Routing

| Route | Notes |
|---|---|
| `/` | Homepage with hero + featured spaces (first 3 from mock) |
| `/espaces` | Full listing with client-side type filter (`'use client'`) |
| `/espaces/[id]` | Detail page — async server component, `params` is a Promise |
| `/publier` | Publish form — UI only, submit is disabled |

### Key conventions

- **Tailwind CSS v4**: configured via `@import "tailwindcss"` in `globals.css` — no `tailwind.config.js`
- **`'use client'`** only where required: `SpaceFilters` (filter state), `espaces/page.tsx` (uses SpaceFilters)
- **Prices**: always in FCFA, formatted with `toLocaleString('fr-FR')`
- **WhatsApp links**: `https://wa.me/<number>?text=<encodeURIComponent(message)>` — number in international format without `+`
- **Next.js 15+ pattern**: dynamic route `params` typed as `Promise<{ id: string }>` and awaited
- **Language**: all UI text and code comments in French

### Type system

`src/types/space.ts` defines the `Espace` interface and `TypeEspace` union type, plus the `TYPES_ESPACE` array used to render filter buttons and form options.
