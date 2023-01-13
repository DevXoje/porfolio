import React from 'react'

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>algo</title>
      </head>
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
