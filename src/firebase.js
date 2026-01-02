// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDqmwznb5FoG0CS07rjIILd-2kNkEZYNO0',
  authDomain: 'fir-demo-a0250.firebaseapp.com',
  projectId: 'fir-demo-a0250',
  storageBucket: 'fir-demo-a0250.firebasestorage.app',
  messagingSenderId: '377016076522',
  appId: '1:377016076522:web:6d11491979a63a2dd92f93',
  measurementId: 'G-RFJRFLCVGE',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()
export const db = getFirestore(app)
export default app
