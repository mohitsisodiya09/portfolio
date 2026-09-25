import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #0a0b10 0%, #14151f 100%)',
          borderRadius: 8,
          border: '1px solid rgba(139, 92, 246, 0.3)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', paddingBottom: 1 }}>
          <span
            style={{
              color: '#eef2ff',
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: '-0.05em',
              lineHeight: 1,
            }}
          >
            M
          </span>
          <span
            style={{
              color: '#8b5cf6',
              fontSize: 22,
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            .
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
