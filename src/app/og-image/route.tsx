import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image generation
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #f3f4f6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Robot Logo Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          {/* Robot Head Box */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              position: 'relative',
            }}
          >
            {/* Robot SVG - Simplified for ImageResponse */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Robot Head Outline */}
              <rect
                x="20"
                y="25"
                width="60"
                height="50"
                rx="8"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="4"
              />
              
              {/* Eyes */}
              <circle cx="40" cy="45" r="8" fill="#06b6d4" />
              <circle cx="60" cy="45" r="8" fill="#06b6d4" />
              
              {/* Antenna */}
              <line
                x1="50"
                y1="25"
                x2="50"
                y2="15"
                stroke="#06b6d4"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="50" cy="12" r="4" fill="#06b6d4" />
              
              {/* Mouth/Sensor Grid */}
              <rect
                x="35"
                y="60"
                width="30"
                height="10"
                rx="2"
                fill="#06b6d4"
                opacity="0.7"
              />
              
              {/* Circuit Lines */}
              <path
                d="M 20 35 L 15 35 L 15 30 L 10 30"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 80 35 L 85 35 L 85 30 L 90 30"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#111827',
            textAlign: 'center',
            marginBottom: '20px',
            lineHeight: '1.2',
          }}
        >
          InfraCore
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '32px',
            color: '#4b5563',
            textAlign: 'center',
            marginBottom: '20px',
            lineHeight: '1.4',
          }}
        >
          Enterprise Infrastructure Solutions
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '24px',
            color: '#6b7280',
            textAlign: 'center',
            marginTop: '20px',
            fontFamily: 'monospace',
          }}
        >
          ~I_am_loveing_infra_I_build_it
        </div>

        {/* Accent Line */}
        <div
          style={{
            width: '120px',
            height: '4px',
            background: 'linear-gradient(to right, transparent, #06b6d4, transparent)',
            borderRadius: '2px',
            marginTop: '30px',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

