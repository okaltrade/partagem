import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Partagem — Partage d\'espaces et colocation en Afrique de l\'Ouest';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          position: 'relative',
          background: 'linear-gradient(135deg, #0c5c40 0%, #0F6F4F 45%, #1E8E63 100%)',
        }}
      >
        {/* Cercles décoratifs en arrière-plan */}
        <div
          style={{
            position: 'absolute',
            right: -80,
            top: -80,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 60,
            bottom: -120,
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: -40,
            bottom: -60,
            width: 260,
            height: 260,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
          }}
        />

        {/* Contenu principal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 100px',
            flex: 1,
          }}
        >
          {/* Logo + Nom */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginBottom: 56,
            }}
          >
            {/* Icône maison miniature */}
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 18,
                background: 'rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 0,
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '16px solid transparent',
                    borderRight: '16px solid transparent',
                    borderBottom: '14px solid rgba(255,255,255,0.9)',
                  }}
                />
                <div
                  style={{
                    width: 26,
                    height: 18,
                    background: 'rgba(255,255,255,0.9)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 12,
                      background: '#0F6F4F',
                      borderRadius: '4px 4px 0 0',
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                color: 'white',
                fontSize: 42,
                fontWeight: 700,
                fontFamily: 'sans-serif',
                letterSpacing: '-0.5px',
              }}
            >
              Partagem
            </div>
          </div>

          {/* Titre principal */}
          <div
            style={{
              color: 'white',
              fontSize: 64,
              fontWeight: 800,
              fontFamily: 'sans-serif',
              lineHeight: 1.1,
              letterSpacing: '-1px',
              maxWidth: 800,
            }}
          >
            Partagez un espace.
          </div>
          <div
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 64,
              fontWeight: 800,
              fontFamily: 'sans-serif',
              lineHeight: 1.1,
              letterSpacing: '-1px',
              maxWidth: 800,
              marginTop: 4,
            }}
          >
            Rejoignez une colocation.
          </div>

          {/* Sous-titre */}
          <div
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: 28,
              fontFamily: 'sans-serif',
              fontWeight: 400,
              marginTop: 36,
              letterSpacing: '0.2px',
            }}
          >
            {"Plateforme de partage d'espaces en Afrique de l'Ouest"}
          </div>
        </div>

        {/* Panneau décoratif droit — cards espaces */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 16,
            paddingRight: 80,
            paddingLeft: 20,
          }}
        >
          {[
            { label: 'Chambre', ville: 'Lomé', prix: '45 000' },
            { label: 'Bureau', ville: 'Abidjan', prix: '80 000' },
            { label: 'Studio', ville: 'Dakar', prix: '85 000' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                width: 260,
                padding: '20px 24px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <div
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: 14,
                  fontFamily: 'sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: 'sans-serif',
                }}
              >
                {item.ville}
              </div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: 16,
                  fontFamily: 'sans-serif',
                }}
              >
                {`${item.prix} FCFA / mois`}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
