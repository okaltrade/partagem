import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0F6F4F',
          borderRadius: '22%',
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
              borderLeft: '38px solid transparent',
              borderRight: '38px solid transparent',
              borderBottom: '32px solid rgba(255,255,255,0.95)',
            }}
          />
          <div
            style={{
              width: 63,
              height: 42,
              background: 'rgba(255,255,255,0.95)',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 20,
                height: 28,
                background: '#0F6F4F',
                borderRadius: '10px 10px 0 0',
              }}
            />
          </div>
          <div
            style={{
              width: 78,
              height: 4,
              background: 'rgba(255,255,255,0.5)',
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    ),
    { width: 180, height: 180 },
  );
}
