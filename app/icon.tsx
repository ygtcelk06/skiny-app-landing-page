import { ImageResponse } from 'next/og'

// Image metedata
export const size = {
  width: 32,
  height: 32
}

export const contentType = 'image/png'

// Image generation

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#6B88EB',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '100%'
        }}
      >
        S
      </div>
    ),
    {
      ...size
    }
  )
}