# Checklist avant chaque commit — Partagem

## Qualité du code

- [ ] `npm run lint` passe sans erreur
- [ ] `npm run build` passe sans erreur
- [ ] Pas de `any` TypeScript non justifié
- [ ] Pas de `console.log` oublié

## Composants

- [ ] `'use client'` uniquement si état ou événement interactif
- [ ] Props typées explicitement (pas d'inférence implicite sur les props)
- [ ] Pas de styles inline quand une classe Tailwind suffit

## Données

- [ ] Contributions affichées en FCFA avec `toLocaleString('fr-FR')`
- [ ] Numéros WhatsApp au format international sans `+` ni espace
- [ ] Liens WhatsApp avec message encodé (`encodeURIComponent`)

## UX

- [ ] L'application fonctionne sur mobile (vérifier avec DevTools)
- [ ] Pas de contenu qui dépasse sur petits écrans
- [ ] Liens de navigation fonctionnels (toutes les routes testées)
- [ ] Textes en français

## Sécurité (même sans backend)

- [ ] Pas d'URL ou de clé secrète en dur dans le code
- [ ] Pas de données sensibles dans les fichiers mock
- [ ] `rel="noopener noreferrer"` sur les liens externes (`target="_blank"`)

## Git

- [ ] Message de commit en français, au présent : "Ajoute la page détail des espaces"
- [ ] Pas de fichiers `node_modules`, `.env`, `.next` dans le commit
- [ ] Chaque commit = une fonctionnalité ou correction isolée
