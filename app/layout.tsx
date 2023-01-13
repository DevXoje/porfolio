import React from 'react'
import { addDoc, collection } from '@firebase/firestore'
import { database } from '../utils/firebaseConfig'
const databaseRef = collection(database, 'projects')
const addProject = () => {
  addDoc(databaseRef, {})
}
export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html>

      <body>
        <div>
          algo antes asfasgf
          {children}
          algo despues

        </div>
      </body>
    </html>

  )
}
