# Architecture — Partagem

## Vue d'ensemble (MVP)

Architecture simple, sans backend :

```
Navigateur
    |
    v
Next.js App Router (SSR / RSC)
    |
    +-- src/app/         (pages et layouts)
    +-- src/components/  (composants réutilisables)
    +-- src/lib/mock/    (données statiques)
    +-- src/types/       (types TypeScript)
```

## Flux de données (MVP)

```
page.tsx
  └── import espaces depuis src/lib/mock/spaces.ts
        └── passe les données en props aux composants
              └── SpaceCard, WhatsAppButton, SpaceFilters
```

Pas d'appel réseau, pas d'état global. Tout est statique.

## Architecture cible (post-MVP)

```
Navigateur
    |
    v
Next.js App Router
    |
    +-- Server Components (fetch Supabase côté serveur)
    +-- Client Components (état UI, formulaires)
    |
    v
Supabase
    +-- Auth (authentification)
    +-- Postgres (espaces, utilisateurs, réservations)
    +-- Storage (photos des espaces)
    +-- Row Level Security (RLS)
```

## Décisions d'architecture

| Décision | Choix | Raison |
|----------|-------|--------|
| Routing | App Router | Standard Next.js 13+, Server Components natifs |
| Styling | Tailwind v4 | Déjà installé, utilitaire, rapide |
| Données | Mock statique | MVP sans backend |
| DB future | Supabase | Open source, Auth + Postgres + Storage inclus |
| Déploiement | Vercel | Optimisé pour Next.js, gratuit pour MVP |

## Composants et leur rôle

| Composant | Type | Rôle |
|-----------|------|------|
| `Navbar` | Serveur | Navigation principale |
| `SpaceCard` | Serveur | Carte d'affichage d'un espace |
| `WhatsAppButton` | Serveur | Lien WhatsApp avec message pré-rempli |
| `SpaceFilters` | Client (`'use client'`) | Filtre interactif par type |

## Règle de décision Server vs Client

- **Serveur** par défaut (moins de JS envoyé au navigateur)
- **Client** uniquement si : `useState`, `useEffect`, gestionnaires d'événements interactifs

## Performance MVP

- Tout est rendu statiquement (SSG) car pas de données dynamiques
- Images : `next/image` avec placeholder couleur
- Fonts : Geist via `next/font/google` (préchargement automatique)
