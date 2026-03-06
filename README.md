# Partagem

Marketplace de partage d'espaces inutilisés en Afrique de l'Ouest.

## Vision produit

Partagem connecte les propriétaires d'espaces sous-utilisés (bureaux vides, salles de réunion, entrepôts, parkings, terrains) avec des personnes ou entreprises qui en ont besoin — sans friction, sans intermédiaire.

Le modèle repose sur la simplicité : l'annonceur propose son espace, la personne intéressée le contacte directement via WhatsApp.

## MVP actuel

Ce dépôt est le MVP **sans backend** :
- Affichage d'espaces (données mock)
- Page détail avec bouton WhatsApp
- Formulaire de publication (UI uniquement, non fonctionnel)
- Pas d'authentification, pas de base de données, pas de paiement

## Ce qui viendra ensuite

- Authentification (Supabase Auth)
- Persistance des espaces (Supabase Postgres)
- Paiement (intégration locale TBD)
- Géolocalisation et carte interactive

## Lancement local

```bash
# Prérequis : Node.js 18+

npm install
npm run dev
```

L'application tourne sur [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

| Commande        | Description                           |
|-----------------|---------------------------------------|
| `npm run dev`   | Serveur de développement (hot reload) |
| `npm run build` | Build de production                   |
| `npm run start` | Serveur de production                 |
| `npm run lint`  | Vérification ESLint                   |

## Structure des routes

| Route           | Description                       |
|-----------------|-----------------------------------|
| `/`             | Page d'accueil (espaces vedettes) |
| `/espaces`      | Liste complète avec filtre        |
| `/espaces/[id]` | Détail d'un espace                |
| `/publier`      | Formulaire de publication         |
