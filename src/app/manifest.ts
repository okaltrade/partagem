import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Partagem',
    short_name: 'Partagem',
    description:
      'Plateforme de partage d\'espaces et de colocation en Afrique de l\'Ouest.',
    start_url: '/',
    display: 'standalone',
    theme_color: '#0F6F4F',
    background_color: '#F5F6F7',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
