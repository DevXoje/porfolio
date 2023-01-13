import React from 'react'

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html>

      <body>
        <div>
          algo antes
          {children}
          algo despues

        </div>
      </body>
    </html>

  )
}
