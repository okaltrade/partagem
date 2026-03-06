import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Partagem – Partage d\'espaces et colocation en Afrique de l\'Ouest',
  description:
    'Partagem est la plateforme de partage d\'espaces et de colocation en Afrique de l\'Ouest. Trouvez ou proposez chambres, studios, bureaux, boutiques et bien plus.',
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
