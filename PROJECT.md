# PROJECT.md — Partagem

## Stack technique

| Couche      | Technologie                          |
|-------------|--------------------------------------|
| Framework   | Next.js 16 (App Router)              |
| Langage     | TypeScript 5 (strict)                |
| Style       | Tailwind CSS v4                      |
| Runtime     | React 19                             |
| DB (prévu)  | Supabase (Postgres + Auth + Storage) |
| Déploiement | Vercel                               |

## Conventions de nommage

- **Composants** : PascalCase (`SpaceCard.tsx`)
- **Pages** : `page.tsx` dans le dossier de la route (convention App Router)
- **Hooks** : `use` + PascalCase (`useEspaces.ts`)
- **Types** : PascalCase, dans `src/types/`
- **Utilitaires** : camelCase (`formatContribution.ts`)
- **Mock data** : dans `src/lib/mock/`
- **Variables CSS** : kebab-case (`--color-primary`)

## Structure des dossiers

```
src/
  app/
    layout.tsx          # Layout racine (Navbar, metadata)
    page.tsx            # Page d'accueil
    globals.css         # Styles globaux + import Tailwind v4
    espaces/
      page.tsx          # Liste des espaces
      [id]/
        page.tsx        # Détail d'un espace
    publier/
      page.tsx          # Formulaire de publication
  components/
    Navbar.tsx
    SpaceCard.tsx
    SpaceFilters.tsx
    WhatsAppButton.tsx
  lib/
    mock/
      spaces.ts         # Données mock
  types/
    space.ts            # Types TypeScript
```

## Routes

| Route           | Composant                      | Description                        |
|-----------------|--------------------------------|------------------------------------|
| `/`             | `app/page.tsx`                 | Hero + 3 espaces vedettes          |
| `/espaces`      | `app/espaces/page.tsx`         | Grille complète + filtre par type  |
| `/espaces/[id]` | `app/espaces/[id]/page.tsx`    | Détail + bouton WhatsApp           |
| `/publier`      | `app/publier/page.tsx`         | Formulaire de publication (UI)     |

## Règles de développement

1. **App Router uniquement** — pas de `pages/`
2. **Composants serveur par défaut** — `'use client'` uniquement quand nécessaire (état, événements)
3. **Types explicites** — pas de `any`, pas d'`as unknown`
4. **Contribution en FCFA** — toujours afficher avec `toLocaleString('fr-FR')` + ` FCFA`
5. **WhatsApp** — format international sans `+` ni espaces (`22890000000`)
6. **Tailwind v4** — `@import "tailwindcss"` dans globals.css, pas de `tailwind.config.js`
7. **Alias `@/`** — utiliser `@/components/...` au lieu de chemins relatifs
8. **Pas de sur-ingénierie** — MVP = simple et fonctionnel

## Checklist avant chaque commit

Voir `prompts/checklist.md`
