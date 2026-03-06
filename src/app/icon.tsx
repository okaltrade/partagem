import { ImageResponse } from 'next/og';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0F6F4F',
          borderRadius: '22%',
        }}
      >
        {/* Maison stylisée : toit + corps */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
          }}
        >
          {/* Toit triangulaire via border trick */}
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: '110px solid transparent',
              borderRight: '110px solid transparent',
              borderBottom: '90px solid rgba(255,255,255,0.95)',
            }}
          />
          {/* Corps de la maison */}
          <div
            style={{
              width: 180,
              height: 120,
              background: 'rgba(255,255,255,0.95)',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            {/* Porte arrondie = partage / colocation */}
            <div
              style={{
                width: 56,
                height: 80,
                background: '#0F6F4F',
                borderRadius: '28px 28px 0 0',
              }}
            />
          </div>
          {/* Sol / base */}
          <div
            style={{
              width: 220,
              height: 10,
              background: 'rgba(255,255,255,0.5)',
              borderRadius: 5,
            }}
          />
        </div>
      </div>
    ),
    { width: 512, height: 512 },
  );
}
