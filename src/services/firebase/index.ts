import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { firebaseConfig } from './config'

// Evita re-inicializar en hot reload
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const firebaseApp = app
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)