import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyDPv5D7O24A8it-B74VQR0Io3BB0i8WIL0',
  authDomain: 'chat-35a57.firebaseapp.com',
  projectId: 'chat-35a57',
  storageBucket: 'chat-35a57.appspot.com',
  messagingSenderId: '934174671735',
  appId: '1:934174671735:web:d8276b53563834b5731772',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
