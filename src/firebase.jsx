import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB3ro-r5gWNLlCn_FoinxomSOyG6TC-9yI',
  authDomain: 'gapchat-dd2a3.firebaseapp.com',
  projectId: 'gapchat-dd2a3',
  storageBucket: 'gapchat-dd2a3.appspot.com',
  messagingSenderId: '764373702558',
  appId: '1:764373702558:web:f4fb298981ecddebd8e88f',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
