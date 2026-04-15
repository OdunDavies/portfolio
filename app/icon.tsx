import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#111111',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
        }}
      >
        <span
          style={{
            color: '#C4622D',
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '-0.5px',
            fontFamily: 'sans-serif',
          }}
        >
          OI
        </span>
      </div>
    ),
    { ...size }
  )
}
