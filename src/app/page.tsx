import Link from 'next/link';
import SpaceCard from '@/components/SpaceCard';
import { espacesMock } from '@/lib/mock/spaces';

export default function Home() {
  const espacesVedettes = espacesMock.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50 px-4 pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:gap-16">

          {/* Texte */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Espaces disponibles maintenant
            </span>

            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Partagez un espace.{' '}
              <span className="text-emerald-700">Rejoignez une colocation.</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Partagem permet de partager facilement des chambres, bureaux, boutiques,
              entrepôts ou terrains inutilisés avec d&apos;autres personnes en Afrique de l&apos;Ouest.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/espaces"
                className="rounded-xl bg-emerald-700 px-7 py-3.5 text-center font-semibold text-white shadow-md transition-all hover:bg-emerald-800 hover:shadow-lg active:scale-95"
              >
                Voir les espaces
              </Link>
              <Link
                href="/publier"
                className="rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-center font-semibold text-gray-700 shadow-sm transition-all hover:border-emerald-400 hover:text-emerald-700 hover:shadow-md active:scale-95"
              >
                Proposer un espace
              </Link>
            </div>

            {/* Stats de confiance */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500 lg:justify-start">
              <span className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Gratuit pour publier
              </span>
              <span className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Contact WhatsApp direct
              </span>
              <span className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                4 pays couverts
              </span>
            </div>
          </div>

          {/* Illustration */}
          <div className="w-full flex-1 lg:max-w-lg">
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
              <img
                src="/hero/hero.svg"
                alt="Illustration d'un immeuble en colocation — espaces partagés en Afrique de l'Ouest"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Pourquoi utiliser Partagem */}
      <section className="bg-white px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Pourquoi utiliser Partagem ?
            </h2>
            <p className="mt-3 text-gray-500">Simple, direct, sans intermédiaire.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H15v-6H9v6H3.75A.75.75 0 013 21V9.75z" />
                  </svg>
                ),
                titre: 'Publier un espace',
                texte: 'Proposez gratuitement une chambre, bureau ou espace inutilisé et trouvez rapidement des personnes intéressées.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                  </svg>
                ),
                titre: 'Trouver un espace',
                texte: "Découvrez des espaces à partager dans votre ville : chambres, studios, bureaux ou espaces commerciaux.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.84L3 20l1.09-3.27C3.4 15.53 3 13.82 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                titre: 'Contact direct',
                texte: 'Discutez directement avec le propriétaire via WhatsApp pour poser vos questions et organiser une visite.',
              },
            ].map((bloc) => (
              <div
                key={bloc.titre}
                className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-slate-50 p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 transition-colors group-hover:bg-emerald-200">
                  {bloc.icon}
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">{bloc.titre}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{bloc.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Espaces vedettes */}
      <section className="bg-slate-50 px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Espaces disponibles</h2>
              <p className="mt-1 text-sm text-gray-500">Sélection récente</p>
            </div>
            <Link
              href="/espaces"
              className="flex items-center gap-1 text-sm font-medium text-emerald-700 hover:underline"
            >
              Voir tout
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {espacesVedettes.map((espace) => (
              <SpaceCard key={espace.id} espace={espace} />
            ))}
          </div>
        </div>
      </section>

      {/* Villes populaires */}
      <section className="bg-white px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Villes populaires</h2>
            <p className="mt-2 text-sm text-gray-500">Trouvez un espace dans votre ville</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { nom: 'Lomé', pays: 'Togo', slug: 'lome', flag: '🇹🇬' },
              { nom: 'Cotonou', pays: 'Bénin', slug: 'cotonou', flag: '🇧🇯' },
              { nom: 'Abidjan', pays: "Côte d'Ivoire", slug: 'abidjan', flag: '🇨🇮' },
              { nom: 'Dakar', pays: 'Sénégal', slug: 'dakar', flag: '🇸🇳' },
            ].map((ville) => (
              <Link
                key={ville.slug}
                href={`/espaces?ville=${ville.slug}`}
                className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-slate-50 px-4 py-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-100 hover:bg-emerald-50 hover:shadow-md"
              >
                <span className="mb-3 text-3xl">{ville.flag}</span>
                <p className="font-semibold text-gray-900">{ville.nom}</p>
                <p className="mt-0.5 text-xs text-gray-400">{ville.pays}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA publier */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 px-4 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Vous avez un espace disponible ?</h2>
          <p className="mt-4 text-base leading-relaxed text-emerald-100">
            Proposez votre espace gratuitement et laissez les personnes intéressées vous contacter
            directement sur WhatsApp. Sans commission, sans intermédiaire.
          </p>
          <Link
            href="/publier"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 font-semibold text-emerald-800 shadow-md transition-all hover:bg-emerald-50 hover:shadow-lg active:scale-95"
          >
            Proposer gratuitement
          </Link>
        </div>
      </section>
    </div>
  );
}
