import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="border-b border-gray-100 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-emerald-700">
          Partagem
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/espaces"
            className="text-sm font-medium text-gray-600 hover:text-emerald-700"
          >
            Espaces
          </Link>
          <Link
            href="/publier"
            className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800"
          >
            Proposer un espace
          </Link>
        </div>
      </nav>
    </header>
  );
}
