import { ImageResponse } from 'next/og';

export const alt = 'Mohit Sisodiya — Senior Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #0a0b10 0%, #12131a 100%)',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, color: '#eef2ff', marginBottom: 16 }}>Mohit Sisodiya</div>
        <div style={{ fontSize: 32, fontWeight: 500, color: '#8b5cf6', marginBottom: 24 }}>
          Senior Software Engineer · Technical Lead
        </div>
        <div style={{ fontSize: 24, color: '#94a3b8', maxWidth: 800 }}>
          Building scalable platforms through architecture, leadership, and code
        </div>
      </div>
    ),
    { ...size }
  );
}
