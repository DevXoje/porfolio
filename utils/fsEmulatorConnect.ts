import { connectFirestoreEmulator } from 'firebase/firestore'
import { database } from './firebaseConfig'

connectFirestoreEmulator(database, 'localhost', 8080)
