'use client';

import { useState, useMemo } from 'react';
import SpaceCard from '@/components/SpaceCard';
import SpaceFilters from '@/components/SpaceFilters';
import { espacesMock } from '@/lib/mock/spaces';
import type { TypeEspace } from '@/types/space';

const villes = [...new Set(espacesMock.map((e) => e.ville))].sort();

export default function EspacesPage() {
  const [filtre, setFiltre] = useState<TypeEspace | 'tous'>('tous');
  const [villeFiltre, setVilleFiltre] = useState('');
  const [contributionMax, setContributionMax] = useState('');
  const [recherche, setRecherche] = useState('');

  const espacesFiltres = useMemo(() => {
    const terme = recherche.toLowerCase().trim();
    const max = contributionMax ? parseInt(contributionMax, 10) : null;

    return espacesMock.filter((e) => {
      if (filtre !== 'tous' && e.type !== filtre) return false;
      if (villeFiltre && e.ville !== villeFiltre) return false;
      if (max !== null && e.prix > max) return false;
      if (terme && !e.titre.toLowerCase().includes(terme) && !e.ville.toLowerCase().includes(terme)) return false;
      return true;
    });
  }, [filtre, villeFiltre, contributionMax, recherche]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Tous les espaces</h1>
      <p className="mt-2 text-gray-500">
        {espacesFiltres.length} espace{espacesFiltres.length > 1 ? 's' : ''} disponible
        {espacesFiltres.length > 1 ? 's' : ''}
      </p>

      {/* Barre de recherche */}
      <div className="mt-6">
        <div className="relative max-w-md">
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
            className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="mt-4">
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

      {espacesFiltres.length === 0 ? (
        <div className="mt-16 text-center text-gray-400">
          <p className="text-lg">Aucun espace trouvé.</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {espacesFiltres.map((espace) => (
            <SpaceCard key={espace.id} espace={espace} />
          ))}
        </div>
      )}
    </div>
  );
}
