import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6t7JttdOiBRvlHeaYUt60pWikTU9yBs4",
  authDomain: "afterglow-c7ada.firebaseapp.com",
  projectId: "afterglow-c7ada",
  storageBucket: "afterglow-c7ada.appspot.com",
  messagingSenderId: "521635716632",
  appId: "1:521635716632:web:bfd18ea6cc1c1566c1ed6d",
  measurementId: "G-NP00W37P9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app); // Conexion con el modulo de Autenticacion de Firebase
export const db = getFirestore(app); // Conexion con el modulo de Base de datos de Firebase
export const store = getStorage(app); // Conexion con el modulo de Storage de Firebase

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });