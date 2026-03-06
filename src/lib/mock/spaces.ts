import type { Espace } from '@/types/space';

// Photos stables via picsum.photos (ID fixe = même image à chaque fois)
// Format : https://picsum.photos/id/{id}/800/500

export const espacesMock: Espace[] = [
  {
    id: '1',
    titre: 'Chambre meublée dans appartement calme',
    type: 'chambre',
    ville: 'Lomé',
    quartier: 'Tokoin',
    prix: 45000,
    disponibleDe: '2026-04-01',
    description:
      'Chambre meublée de 14 m² dans un appartement calme à Tokoin. Lit double, bureau, armoire. Cuisine et salle de bain partagées avec une seule cohabitante. Environnement sécurisé et tranquille, idéal pour étudiant ou jeune professionnel.',
    equipements: ['Lit double', 'Bureau et chaise', 'Armoire', 'Ventilateur', 'Cuisine partagée', 'Salle de bain partagée', 'Wi-Fi inclus', 'Eau courante'],
    regles: ['Non-fumeur', 'Pas d\'animaux', 'Rentrée avant 22h', 'Ménage partagé chaque semaine'],
    images: [
      'https://picsum.photos/id/164/800/500',
      'https://picsum.photos/id/210/800/500',
    ],
    whatsapp: '22891234567',
  },
  {
    id: '2',
    titre: 'Studio moderne en plein centre',
    type: 'studio',
    ville: 'Lomé',
    quartier: 'Bè',
    prix: 75000,
    disponibleDe: '2026-03-15',
    description:
      'Studio entier de 30 m² au cœur de Lomé, entièrement meublé. Espace salon-cuisine ouvert, coin nuit séparé par une cloison, salle de bain privative. Idéal pour personne seule cherchant son indépendance.',
    equipements: ['Lit 1 personne', 'Canapé', 'Cuisine équipée', 'Réfrigérateur', 'Salle de bain privative', 'Wi-Fi inclus', 'Eau chaude', 'Ventilateur'],
    regles: ['Non-fumeur', 'Respect des voisins', 'Pas de fêtes'],
    images: [
      'https://picsum.photos/id/366/800/500',
      'https://picsum.photos/id/431/800/500',
    ],
    whatsapp: '22892345678',
  },
  {
    id: '3',
    titre: 'Bureau climatisé quartier administratif',
    type: 'bureau',
    ville: 'Lomé',
    quartier: 'Agbalépédogan',
    prix: 80000,
    disponibleDe: '2026-04-01',
    description:
      'Bureau privé de 20 m² situé dans un immeuble professionnel du quartier administratif. Climatisation, accès fibre optique partagée, salle de réunion disponible sur réservation. Idéal pour freelance ou petite équipe de 2 personnes.',
    equipements: ['Climatisation', 'Fibre optique', 'Bureau et chaises', 'Armoire de rangement', 'Salle de réunion partagée', 'Parking sécurisé', 'Accueil gardien'],
    regles: ['Horaires 7h-20h', 'Pas de bruit excessif', 'Locaux partagés entretenus'],
    images: [
      'https://picsum.photos/id/380/800/500',
      'https://picsum.photos/id/443/800/500',
    ],
    whatsapp: '22893456789',
  },
  {
    id: '4',
    titre: 'Appartement 2 pièces à partager',
    type: 'appartement',
    ville: 'Abidjan',
    quartier: 'Cocody',
    prix: 120000,
    disponibleDe: '2026-04-15',
    description:
      'Appartement de 55 m² à Cocody à partager avec une autre personne. Deux chambres, grand salon, cuisine entièrement équipée. Résidence sécurisée avec gardien et piscine. Cherche cohabitant sérieux et discret.',
    equipements: ['2 chambres', 'Grand salon', 'Cuisine équipée', 'Réfrigérateur', 'Machine à laver', 'Piscine résidence', 'Gardien 24h/24', 'Parking'],
    regles: ['Non-fumeur à l\'intérieur', 'Pas d\'animaux', 'Contribution payée le 1er du mois', 'Caution 2 mois'],
    images: [
      'https://picsum.photos/id/260/800/500',
      'https://picsum.photos/id/271/800/500',
      'https://picsum.photos/id/292/800/500',
    ],
    whatsapp: '22501234567',
  },
  {
    id: '5',
    titre: 'Poste coworking espace moderne',
    type: 'bureau',
    ville: 'Abidjan',
    quartier: 'Plateau',
    prix: 30000,
    disponibleDe: '2026-03-10',
    description:
      'Poste de travail dédié dans un espace coworking dynamique au Plateau. Internet très haut débit, café et eau inclus, adresse postale disponible. Ambiance professionnelle et conviviale. Accès 24h/24 avec badge.',
    equipements: ['Poste dédié', 'Internet 100 Mbps', 'Café et eau', 'Imprimante', 'Salle de réunion (2h/semaine)', 'Casier sécurisé', 'Adresse postale', 'Accès 24h/24'],
    regles: ['Tenue professionnelle', 'Appels téléphoniques en cabine', 'Musique au casque uniquement'],
    images: [
      'https://picsum.photos/id/3/800/500',
      'https://picsum.photos/id/42/800/500',
    ],
    whatsapp: '22502345678',
  },
  {
    id: '6',
    titre: 'Chambre dans villa avec jardin',
    type: 'chambre',
    ville: 'Cotonou',
    quartier: 'Fidjrossè',
    prix: 55000,
    disponibleDe: '2026-04-01',
    description:
      'Grande chambre de 18 m² dans une belle villa avec jardin à Fidjrossè. Lit king size, climatisation, salle de bain partagée avec un seul cohabitant. Proche de la plage, environnement calme et verdoyant.',
    equipements: ['Lit king size', 'Climatisation', 'Bureau', 'Jardin partagé', 'Salle de bain partagée', 'Cuisine partagée', 'Wi-Fi', 'Gardien'],
    regles: ['Non-fumeur', 'Animaux sur accord', 'Pas de visiteurs nocturnes sans accord', 'Respect du jardin'],
    images: [
      'https://picsum.photos/id/137/800/500',
      'https://picsum.photos/id/15/800/500',
    ],
    whatsapp: '22961234567',
  },
  {
    id: '7',
    titre: 'Boutique en partage marché central',
    type: 'boutique',
    ville: 'Cotonou',
    quartier: 'Dantokpa',
    prix: 65000,
    disponibleDe: '2026-03-20',
    description:
      'Espace boutique de 25 m² à partager dans un passage commerçant proche du marché Dantokpa. Vitrine sur rue, comptoir, rangements intégrés. Idéal pour artisan ou créateur souhaitant réduire ses coûts en partageant l\'espace avec un commerce complémentaire.',
    equipements: ['Vitrine sur rue', 'Comptoir de vente', 'Rangements intégrés', 'Éclairage LED', 'Prise électrique', 'Eau courante'],
    regles: ['Commerce légal uniquement', 'Partage du nettoyage', 'Horaires 8h-19h', 'Pas de stockage encombrant'],
    images: [
      'https://picsum.photos/id/239/800/500',
      'https://picsum.photos/id/402/800/500',
    ],
    whatsapp: '22962345678',
  },
  {
    id: '8',
    titre: 'Studio cosy quartier universitaire',
    type: 'studio',
    ville: 'Dakar',
    quartier: 'Fann-Point E',
    prix: 85000,
    disponibleDe: '2026-05-01',
    description:
      'Studio de 28 m² bien agencé à deux pas de l\'université Cheikh Anta Diop. Meublé avec goût, cuisine ouverte équipée, salle de bain privative. Immeuble récent, accès sécurisé. Idéal pour doctorant ou jeune professionnel.',
    equipements: ['Lit double', 'Canapé convertible', 'Cuisine équipée', 'Réfrigérateur', 'Salle de bain privative', 'Climatisation', 'Wi-Fi', 'Interphone'],
    regles: ['Non-fumeur', 'Pas d\'animaux', 'Musique modérée après 22h', 'Respect des voisins'],
    images: [
      'https://picsum.photos/id/186/800/500',
      'https://picsum.photos/id/237/800/500',
      'https://picsum.photos/id/338/800/500',
    ],
    whatsapp: '221771234567',
  },
];

export function getEspaceById(id: string): Espace | undefined {
  return espacesMock.find((e) => e.id === id);
}
