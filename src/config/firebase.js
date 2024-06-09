// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBmWXICcxEkJkcTLOFpfYWcvQpoc7smrFk',
  authDomain: 'portalberita-827b2.firebaseapp.com',
  projectId: 'portalberita-827b2',
  storageBucket: 'portalberita-827b2.appspot.com',
  messagingSenderId: '813813292045',
  appId: '1:813813292045:web:4521794421e2fb52c48944'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

export { db, auth }
