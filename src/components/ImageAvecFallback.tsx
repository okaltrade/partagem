'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function ImageAvecFallback({ src, alt, className, sizes, priority }: Props) {
  const [erreur, setErreur] = useState(false);

  if (erreur) {
    return <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-slate-200" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setErreur(true)}
    />
  );
}
