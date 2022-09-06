// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore, collection } from "firebase/firestore"

// Initialize Firebase
const app = initializeApp({
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_PROJECT_ID + ".firebaseapp.com",
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_PROJECT_ID + ".appspot.com",
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
});

const auth = getAuth()


const db = getFirestore(app)
const companiesCollection = collection(db, "companies")
const productsCollection = collection(db, "products")
const certificatesCollection = collection(db, "certificates")

export { 
  auth,
  companiesCollection,
  productsCollection,
  certificatesCollection
}