# Prompts de développement — Partagem

Prompts utiles pour continuer le développement avec Claude Code.

---

## Ajouter un nouveau composant

```
Crée un composant React TypeScript dans src/components/<NomComposant>.tsx.
- Utilise Tailwind CSS v4 (classes utilitaires standard)
- Pas de 'use client' sauf si le composant a un état ou des événements
- Utilise les types de src/types/space.ts si nécessaire
- Style cohérent avec les autres composants (cards blanches, ombres légères, coins arrondis)
- Contributions en FCFA formatées avec toLocaleString('fr-FR')
```

---

## Connecter Supabase

```
Connecte Partagem à Supabase :
1. Installe @supabase/supabase-js et @supabase/ssr
2. Crée src/lib/supabase/client.ts (client navigateur) et server.ts (client serveur)
3. Ajoute les variables d'env NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY
4. Remplace les données mock de src/lib/mock/spaces.ts par de vraies requêtes Supabase
5. Utilise le schéma de docs/database.md
6. Garde la même interface TypeScript (src/types/space.ts)
```

---

## Ajouter l'authentification

```
Ajoute l'authentification Supabase Auth à Partagem :
- Connexion par email/mot de passe ou magic link
- Middleware Next.js pour protéger la route /publier
- Redirection vers /connexion si non authentifié
- Affichage du profil dans la Navbar si connecté
- Pas de sur-ingénierie : pas de contexte global pour le MVP
```

---

## Rendre le formulaire /publier fonctionnel

```
Rends le formulaire src/app/publier/page.tsx fonctionnel :
- Utilise React Hook Form + Zod pour la validation
- Soumission vers une Server Action Next.js
- Insère dans la table 'espaces' de Supabase
- Validation : titre (min 5 chars), type (enum), ville (min 2 chars), prix (entier positif), whatsapp (11 chiffres)
- Message de succès avec lien vers l'espace créé
- Gestion des erreurs claire pour l'utilisateur
```

---

## Ajouter le filtre de recherche avancé

```
Améliore src/app/espaces/page.tsx :
- Filtre par ville (liste déroulante des villes disponibles)
- Filtre par contribution max (curseur ou input)
- Tri par : contribution croissante, contribution décroissante, plus récents
- URL params pour partager les filtres (useSearchParams)
- Garde le filtre par type existant
```

---

## Ajouter l'upload de photos

```
Ajoute l'upload de photos dans le formulaire /publier :
- Utilise Supabase Storage (bucket 'espaces-images')
- Maximum 5 photos par espace
- Aperçu avant upload
- Compression côté client (browser-image-compression)
- Stocke les URLs dans le tableau images[] de la table espaces
```

---

## SEO et métadonnées dynamiques

```
Améliore le SEO de Partagem :
- Métadonnées dynamiques dans src/app/espaces/[id]/page.tsx (generateMetadata)
- Sitemap.xml automatique (src/app/sitemap.ts)
- robots.txt (src/app/robots.ts)
- Open Graph pour le partage sur réseaux sociaux
- Titre format : "<titre espace> à <ville> — Partagem"
```
