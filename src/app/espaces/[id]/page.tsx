import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import ImageAvecFallback from '@/components/ImageAvecFallback';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getEspaceById, espacesMock } from '@/lib/mock/spaces';
import { TYPES_ESPACE } from '@/types/space';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const espace = getEspaceById(id);
  if (!espace) return {};
  return {
    title: `${espace.titre} à ${espace.ville} — Partagem`,
    description: espace.description.slice(0, 160),
  };
}

export async function generateStaticParams() {
  return espacesMock.map((e) => ({ id: e.id }));
}

export default async function EspaceDetailPage({ params }: Props) {
  const { id } = await params;
  const espace = getEspaceById(id);

  if (!espace) {
    notFound();
  }

  const labelType =
    TYPES_ESPACE.find((t) => t.valeur === espace.type)?.label ?? espace.type;

  const dateDisponible = new Date(espace.disponibleDe).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {/* Fil d'Ariane */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-700">
          Accueil
        </Link>{' '}
        /{' '}
        <Link href="/espaces" className="hover:text-emerald-700">
          Espaces
        </Link>{' '}
        / <span className="text-gray-800">{espace.titre}</span>
      </nav>

      {/* Image principale */}
      <div className="relative h-64 overflow-hidden rounded-xl sm:h-80">
        <ImageAvecFallback
          src={espace.images[0]}
          alt={espace.titre}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      {/* Vignettes supplémentaires */}
      {espace.images.length > 1 && (
        <div className="mt-2 flex gap-2">
          {espace.images.slice(1).map((img, i) => (
            <div key={i} className="relative h-20 w-32 shrink-0 overflow-hidden rounded-lg">
              <ImageAvecFallback
                src={img}
                alt={`${espace.titre} — photo ${i + 2}`}
                className="object-cover"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      )}

      {/* Contenu principal */}
      <div className="mt-8">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
          {labelType}
        </span>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">{espace.titre}</h1>

        {/* Localisation */}
        <div className="mt-3 flex items-center gap-1 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {espace.quartier}, {espace.ville}
        </div>

        {/* Contribution + disponibilité */}
        <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">Contribution mensuelle</p>
            <p className="mt-1 text-2xl font-bold text-emerald-700">
              {espace.prix.toLocaleString('fr-FR')}{' '}
              <span className="text-sm font-normal text-gray-500">FCFA</span>
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">Disponible dès le</p>
            <p className="mt-1 text-base font-semibold text-gray-800">{dateDisponible}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 border-t border-gray-100 pt-6">
          <h2 className="text-lg font-semibold text-gray-900">Description</h2>
          <p className="mt-3 leading-relaxed text-gray-600">{espace.description}</p>
        </div>

        {/* Équipements */}
        <div className="mt-6 border-t border-gray-100 pt-6">
          <h2 className="text-lg font-semibold text-gray-900">Équipements inclus</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {espace.equipements.map((eq) => (
              <li key={eq} className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 shrink-0 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {eq}
              </li>
            ))}
          </ul>
        </div>

        {/* Règles de vie */}
        <div className="mt-6 border-t border-gray-100 pt-6">
          <h2 className="text-lg font-semibold text-gray-900">Règles de vie</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {espace.regles.map((regle) => (
              <li key={regle} className="flex items-start gap-2 text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                </svg>
                {regle}
              </li>
            ))}
          </ul>
        </div>

        {/* Bouton WhatsApp */}
        <div className="mt-8">
          <WhatsAppButton espace={espace} className="w-full justify-center sm:w-auto" />
        </div>
      </div>
    </div>
  );
}
