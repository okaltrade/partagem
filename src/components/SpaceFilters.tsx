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
  const optionsType = [{ valeur: 'tous' as const, label: 'Tous' }, ...TYPES_ESPACE];

  return (
    <div className="flex flex-col gap-3">
      {/* Filtres par type — scroll horizontal sur mobile */}
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-2 pb-1">
          {optionsType.map((option) => {
            const actif = type === option.valeur;
            return (
              <button
                key={option.valeur}
                onClick={() => onTypeChange(option.valeur)}
                className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-all active:scale-95 ${
                  actif
                    ? 'border-emerald-700 bg-emerald-700 text-white shadow-sm'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-emerald-400 hover:text-emerald-700'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtres ville + contribution max */}
      <div className="flex flex-wrap gap-3">
        <select
          value={ville}
          onChange={(e) => onVilleChange(e.target.value)}
          className="flex-1 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 sm:flex-none"
        >
          <option value="">Toutes les villes</option>
          {villes.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>

        <div className="relative flex-1 sm:flex-none">
          <input
            type="number"
            min="0"
            step="5000"
            value={contributionMax}
            onChange={(e) => onContributionMaxChange(e.target.value)}
            placeholder="Max FCFA"
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-3 pr-14 text-sm text-gray-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400">
            FCFA
          </span>
        </div>
      </div>
    </div>
  );
}
