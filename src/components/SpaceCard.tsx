import Link from 'next/link';
import type { Espace } from '@/types/space';
import { TYPES_ESPACE } from '@/types/space';
import ImageAvecFallback from '@/components/ImageAvecFallback';

interface Props {
  espace: Espace;
}

const COULEURS_TYPE: Record<string, string> = {
  chambre: 'bg-pink-100 text-pink-700',
  studio: 'bg-violet-100 text-violet-700',
  appartement: 'bg-blue-100 text-blue-700',
  bureau: 'bg-sky-100 text-sky-700',
  boutique: 'bg-orange-100 text-orange-700',
  entrepot: 'bg-amber-100 text-amber-700',
  terrain: 'bg-green-100 text-green-700',
  autre: 'bg-yellow-100 text-yellow-700',
};

export default function SpaceCard({ espace }: Props) {
  const labelType =
    TYPES_ESPACE.find((t) => t.valeur === espace.type)?.label ?? espace.type;
  const couleurBadge = COULEURS_TYPE[espace.type] ?? 'bg-gray-100 text-gray-700';

  return (
    <Link
      href={`/espaces/${espace.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageAvecFallback
          src={espace.images[0]}
          alt={espace.titre}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badge type superposé sur l'image */}
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-semibold shadow-sm ${couleurBadge}`}
        >
          {labelType}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        {/* Titre */}
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-gray-900 transition-colors group-hover:text-emerald-700">
          {espace.titre}
        </h3>

        {/* Ville + quartier */}
        <p className="flex items-center gap-1 text-sm text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {espace.quartier}, {espace.ville}
        </p>

        {/* Prix + flèche */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <span className="text-lg font-bold text-emerald-700">
              {espace.prix.toLocaleString('fr-FR')}
            </span>
            <span className="ml-1 text-xs text-gray-400">FCFA / mois</span>
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition-all group-hover:bg-emerald-700 group-hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
