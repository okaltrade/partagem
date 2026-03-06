import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://partagem.vercel.app'),

  title: {
    default: 'Partagem — Partage d\'espaces et colocation en Afrique de l\'Ouest',
    template: '%s — Partagem',
  },

  description:
    'Partagem est une plateforme de partage d\'espaces et de colocation en Afrique de l\'Ouest. Trouvez ou proposez une chambre, studio, appartement ou espace partagé.',

  keywords: [
    'colocation',
    'partage espace',
    'chambre à partager',
    'studio',
    'appartement',
    'bureau partagé',
    'Afrique de l\'Ouest',
    'Lomé',
    'Abidjan',
    'Dakar',
    'Cotonou',
  ],

  openGraph: {
    title: 'Partagem — Partage d\'espaces et colocation en Afrique de l\'Ouest',
    description:
      'Trouvez ou proposez une chambre, studio, appartement ou espace partagé en Afrique de l\'Ouest. Contact direct via WhatsApp.',
    url: 'https://partagem.vercel.app',
    siteName: 'Partagem',
    locale: 'fr_FR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Partagem — Partage d\'espaces et colocation',
    description:
      'Trouvez ou proposez une chambre, studio ou espace partagé en Afrique de l\'Ouest.',
    site: '@partagem',
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geist.variable} bg-gray-50 font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
