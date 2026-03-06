'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [ouvert, setOuvert] = useState(false);
  const pathname = usePathname();

  const fermer = () => setOuvert(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        {/* Logo */}
        <Link
          href="/"
          onClick={fermer}
          className="text-xl font-bold tracking-tight text-emerald-700 transition-opacity hover:opacity-80"
        >
          Partagem
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 sm:flex">
          <Link
            href="/espaces"
            className={`text-sm font-medium transition-colors ${
              pathname.startsWith('/espaces')
                ? 'text-emerald-700'
                : 'text-gray-600 hover:text-emerald-700'
            }`}
          >
            Espaces
          </Link>
          <Link
            href="/publier"
            className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-800 hover:shadow-md active:scale-95"
          >
            Proposer un espace
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOuvert((o) => !o)}
          className="flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 sm:hidden"
          aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={ouvert}
        >
          {ouvert ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menu mobile */}
      {ouvert && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 sm:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href="/espaces"
              onClick={fermer}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                pathname.startsWith('/espaces')
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Espaces
            </Link>
            <Link
              href="/publier"
              onClick={fermer}
              className="mt-2 rounded-lg bg-emerald-700 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
            >
              Proposer un espace
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
