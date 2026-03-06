'use client';

import { TYPES_ESPACE, type TypeEspace } from '@/types/space';

interface Props {
  type: TypeEspace | 'tous';
  ville: string;
  contributionMax: string;
  onTypeChange: (valeur: TypeEspace | 'tous') => void;
  onVilleChange: (ville: string) => void;
  onContributionMaxChange: (max: string) => void;
  villes: string[];
}

export default function SpaceFilters({
  type,
  ville,
  contributionMax,
  onTypeChange,
  onVilleChange,
  onContributionMaxChange,
  villes,
}: Props) {
  const optionsType = [{ valeur: 'tous' as const, label: 'Tous les types' }, ...TYPES_ESPACE];

  return (
    <div className="flex flex-col gap-4">
      {/* Filtres par type */}
      <div className="flex flex-wrap gap-2">
        {optionsType.map((option) => {
          const actif = type === option.valeur;
          return (
            <button
              key={option.valeur}
              onClick={() => onTypeChange(option.valeur)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                actif
                  ? 'border-emerald-700 bg-emerald-700 text-white shadow-sm'
                  : 'border-gray-200 bg-white text-gray-600 shadow-sm hover:border-emerald-400 hover:text-emerald-700'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {/* Filtres ville + contribution max */}
      <div className="flex flex-wrap gap-3">
        <select
          value={ville}
          onChange={(e) => onVilleChange(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        >
          <option value="">Toutes les villes</option>
          {villes.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>

        <div className="relative">
          <input
            type="number"
            min="0"
            step="5000"
            value={contributionMax}
            onChange={(e) => onContributionMaxChange(e.target.value)}
            placeholder="Contribution max"
            className="rounded-lg border border-gray-200 bg-white py-2 pl-3 pr-16 text-sm text-gray-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
            FCFA
          </span>
        </div>
      </div>
    </div>
  );
}
