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

  const message = `Bonjour, je souhaite rejoindre l'espace : ${espace.titre} à ${espace.ville}`;
  const whatsappUrl = `https://wa.me/${espace.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Barre WhatsApp sticky en bas — mobile uniquement */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-100 bg-white px-4 py-3 shadow-lg sm:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-emerald-700 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.139.564 4.147 1.549 5.887L.057 23.882a.5.5 0 0 0 .61.61l6.057-1.484A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.917 0-3.715-.504-5.271-1.385l-.371-.214-3.899.955.975-3.818-.228-.381A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          Contacter sur WhatsApp
        </a>
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-28 pt-6 sm:pb-12 sm:pt-10">
        {/* Fil d'Ariane */}
        <nav className="mb-5 flex items-center gap-1.5 text-sm text-gray-400">
          <Link href="/" className="transition-colors hover:text-emerald-700">Accueil</Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/espaces" className="transition-colors hover:text-emerald-700">Espaces</Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="truncate text-gray-700">{espace.titre}</span>
        </nav>

        {/* Image principale */}
        <div className="relative h-56 overflow-hidden rounded-2xl shadow-md sm:h-80">
          <ImageAvecFallback
            src={espace.images[0]}
            alt={espace.titre}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-0.5 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur-sm">
            {labelType}
          </span>
        </div>

        {/* Vignettes */}
        {espace.images.length > 1 && (
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {espace.images.slice(1).map((img, i) => (
              <div key={i} className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-32">
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

        {/* Contenu */}
        <div className="mt-6">
          <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">{espace.titre}</h1>

          {/* Localisation */}
          <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {espace.quartier}, {espace.ville}
          </p>

          {/* Contribution + disponibilité */}
          <div className="mt-5 grid grid-cols-2 gap-4 rounded-2xl border border-gray-100 bg-slate-50 p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Contribution</p>
              <p className="mt-1 text-2xl font-bold text-emerald-700">
                {espace.prix.toLocaleString('fr-FR')}
                <span className="ml-1 text-sm font-normal text-gray-400">FCFA/mois</span>
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Disponible dès</p>
              <p className="mt-1 text-base font-semibold text-gray-800">{dateDisponible}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 border-t border-gray-100 pt-6">
            <h2 className="mb-3 font-semibold text-gray-900">Description</h2>
            <p className="leading-relaxed text-gray-600">{espace.description}</p>
          </div>

          {/* Équipements */}
          <div className="mt-6 border-t border-gray-100 pt-6">
            <h2 className="mb-3 font-semibold text-gray-900">Équipements inclus</h2>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {espace.equipements.map((eq) => (
                <li key={eq} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {eq}
                </li>
              ))}
            </ul>
          </div>

          {/* Règles */}
          <div className="mt-6 border-t border-gray-100 pt-6">
            <h2 className="mb-3 font-semibold text-gray-900">Règles de vie</h2>
            <ul className="flex flex-col gap-2">
              {espace.regles.map((regle) => (
                <li key={regle} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                  </svg>
                  {regle}
                </li>
              ))}
            </ul>
          </div>

          {/* Bouton desktop */}
          <div className="mt-8 hidden sm:block">
            <WhatsAppButton espace={espace} className="w-full justify-center rounded-xl py-3.5 text-base sm:w-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
