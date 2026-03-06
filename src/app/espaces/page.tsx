'use client';

import { Suspense, useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import SpaceCard from '@/components/SpaceCard';
import SpaceFilters from '@/components/SpaceFilters';
import { espacesMock } from '@/lib/mock/spaces';
import type { TypeEspace } from '@/types/space';

const villes = [...new Set(espacesMock.map((e) => e.ville))].sort();

/** Supprime les accents et met en minuscules pour la comparaison */
function normaliser(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

/** Trouve la ville réelle (ex: "Lomé") depuis un slug URL (ex: "lome") */
function villeDepuisSlug(slug: string): string {
  return villes.find((v) => normaliser(v) === normaliser(slug)) ?? '';
}

function EspacesContenu() {
  const searchParams = useSearchParams();

  const villeInitiale = villeDepuisSlug(searchParams.get('ville') ?? '');

  const [filtre, setFiltre] = useState<TypeEspace | 'tous'>('tous');
  const [villeFiltre, setVilleFiltre] = useState(villeInitiale);
  const [contributionMax, setContributionMax] = useState('');
  const [recherche, setRecherche] = useState('');

  // Synchronise le filtre si le paramètre URL change (ex: retour depuis homepage)
  useEffect(() => {
    setVilleFiltre(villeDepuisSlug(searchParams.get('ville') ?? ''));
  }, [searchParams]);

  const espacesFiltres = useMemo(() => {
    const terme = recherche.toLowerCase().trim();
    const max = contributionMax ? parseInt(contributionMax, 10) : null;

    return espacesMock.filter((e) => {
      if (filtre !== 'tous' && e.type !== filtre) return false;
      if (villeFiltre && normaliser(e.ville) !== normaliser(villeFiltre)) return false;
      if (max !== null && e.prix > max) return false;
      if (terme && !e.titre.toLowerCase().includes(terme) && !e.ville.toLowerCase().includes(terme)) return false;
      return true;
    });
  }, [filtre, villeFiltre, contributionMax, recherche]);

  const titreH1 = villeFiltre
    ? `Espaces disponibles à ${villeFiltre}`
    : 'Espaces disponibles';

  return (
    <div>
      {/* En-tête + recherche + filtres — sticky sur mobile */}
      <div className="sticky top-[57px] z-40 border-b border-gray-100 bg-white/95 px-4 pb-4 pt-4 shadow-sm backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          {/* Titre + compteur */}
          <div className="mb-3 flex items-baseline justify-between">
            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">{titreH1}</h1>
            <span className="text-sm text-gray-400">
              {espacesFiltres.length} résultat{espacesFiltres.length > 1 ? 's' : ''}
            </span>
          </div>

          {/* Barre de recherche */}
          <div className="relative mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="search"
              placeholder="Rechercher par ville ou titre..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <SpaceFilters
            type={filtre}
            ville={villeFiltre}
            contributionMax={contributionMax}
            onTypeChange={setFiltre}
            onVilleChange={setVilleFiltre}
            onContributionMaxChange={setContributionMax}
            villes={villes}
          />
        </div>
      </div>

      {/* Grille */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        {espacesFiltres.length === 0 ? (
          <div className="mt-16 flex flex-col items-center gap-3 text-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
            </svg>
            <p className="text-lg font-medium text-gray-500">Aucun espace trouvé.</p>
            <p className="text-sm">Essayez de modifier vos filtres.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {espacesFiltres.map((espace) => (
              <SpaceCard key={espace.id} espace={espace} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function EspacesPage() {
  return (
    <Suspense>
      <EspacesContenu />
    </Suspense>
  );
}
