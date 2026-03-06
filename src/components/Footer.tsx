import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:justify-between">
          {/* Marque */}
          <div className="max-w-xs">
            <p className="text-xl font-bold text-emerald-700">Partagem</p>
            <p className="mt-2 text-sm text-gray-500">
              Plateforme de partage d&apos;espaces et de colocation en Afrique de l&apos;Ouest.
            </p>
          </div>

          {/* Liens */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Navigation
            </p>
            <Link
              href="/espaces"
              className="text-sm text-gray-600 transition-colors hover:text-emerald-700"
            >
              Espaces
            </Link>
            <Link
              href="/publier"
              className="text-sm text-gray-600 transition-colors hover:text-emerald-700"
            >
              Proposer un espace
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Partagem
        </div>
      </div>
    </footer>
  );
}
