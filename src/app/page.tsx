import Link from 'next/link';
import SpaceCard from '@/components/SpaceCard';
import { espacesMock } from '@/lib/mock/spaces';

export default function Home() {
  const espacesVedettes = espacesMock.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50 px-4 py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">

          {/* Texte */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Partagez un espace.{' '}
              <span className="text-emerald-700">Rejoignez une colocation.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Partagem permet de partager facilement des chambres, bureaux, boutiques,
              entrepôts ou terrains inutilisés avec d&apos;autres personnes.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/espaces"
                className="rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-emerald-800"
              >
                Voir les espaces
              </Link>
              <Link
                href="/publier"
                className="rounded-lg border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 shadow-sm transition-colors hover:border-emerald-400 hover:text-emerald-700"
              >
                Proposer un espace
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-full flex-1 lg:max-w-lg">
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
              {/* img natif : SVG servi directement depuis public/, fonctionne sur Vercel */}
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
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900">
            Pourquoi utiliser Partagem ?
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Bloc 1 */}
            <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-slate-50 p-8 text-center shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H15v-6H9v6H3.75A.75.75 0 013 21V9.75z" />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Publier un espace</h3>
              <p className="text-sm text-gray-500">
                Proposez gratuitement une chambre, bureau ou espace inutilisé et trouvez rapidement
                des personnes intéressées.
              </p>
            </div>

            {/* Bloc 2 */}
            <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-slate-50 p-8 text-center shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Trouver un espace</h3>
              <p className="text-sm text-gray-500">
                Découvrez des espaces à partager dans votre ville : chambres, studios, bureaux ou
                espaces commerciaux.
              </p>
            </div>

            {/* Bloc 3 */}
            <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-slate-50 p-8 text-center shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.84L3 20l1.09-3.27C3.4 15.53 3 13.82 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Contact direct</h3>
              <p className="text-sm text-gray-500">
                Discutez directement avec le propriétaire via WhatsApp pour poser vos questions et
                organiser une visite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Espaces vedettes */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Espaces disponibles</h2>
          <Link
            href="/espaces"
            className="text-sm font-medium text-emerald-700 hover:underline"
          >
            Voir tout
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {espacesVedettes.map((espace) => (
            <SpaceCard key={espace.id} espace={espace} />
          ))}
        </div>
      </section>

      {/* Villes populaires */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900">Villes populaires</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { nom: 'Lomé', pays: 'Togo', slug: 'lome' },
              { nom: 'Cotonou', pays: 'Bénin', slug: 'cotonou' },
              { nom: 'Abidjan', pays: "Côte d'Ivoire", slug: 'abidjan' },
              { nom: 'Dakar', pays: 'Sénégal', slug: 'dakar' },
            ].map((ville) => (
              <Link
                key={ville.slug}
                href={`/espaces?ville=${ville.slug}`}
                className="group flex flex-col items-center rounded-xl border border-gray-100 bg-white px-6 py-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 transition-colors group-hover:bg-emerald-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">{ville.nom}</p>
                <p className="mt-1 text-xs text-gray-400">{ville.pays}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA publier */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-xl">
          <h2 className="text-2xl font-bold">Vous avez un espace disponible ?</h2>
          <p className="mt-3 text-emerald-100">
            Proposez votre espace gratuitement et laissez les personnes intéressées vous contacter
            directement sur WhatsApp.
          </p>
          <Link
            href="/publier"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-emerald-800 shadow-md transition-colors hover:bg-emerald-50"
          >
            Proposer gratuitement
          </Link>
        </div>
      </section>
    </div>
  );
}
