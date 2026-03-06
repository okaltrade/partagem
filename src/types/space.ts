export type TypeEspace =
  | 'chambre'
  | 'studio'
  | 'appartement'
  | 'bureau'
  | 'boutique'
  | 'entrepot'
  | 'terrain'
  | 'autre';

export const TYPES_ESPACE: { valeur: TypeEspace; label: string }[] = [
  { valeur: 'chambre', label: 'Chambre' },
  { valeur: 'studio', label: 'Studio' },
  { valeur: 'appartement', label: 'Appartement' },
  { valeur: 'bureau', label: 'Bureau' },
  { valeur: 'boutique', label: 'Boutique' },
  { valeur: 'entrepot', label: 'Entrepôt' },
  { valeur: 'terrain', label: 'Terrain' },
  { valeur: 'autre', label: 'Autre' },
];

export interface Espace {
  id: string;
  titre: string;
  type: TypeEspace;
  ville: string;
  quartier: string;
  prix: number;
  disponibleDe: string;
  description: string;
  equipements: string[];
  regles: string[];
  images: string[];
  whatsapp: string;
}
