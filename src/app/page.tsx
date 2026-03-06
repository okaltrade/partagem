import Link from 'next/link';
import Image from 'next/image';
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
              <Image
                src="/hero/hero.svg"
                alt="Illustration d'un immeuble en colocation — espaces partagés en Afrique de l'Ouest"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
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
