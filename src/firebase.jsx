import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPefhxezGYQSjqD1JzK9zVqu16jZn60lA",
  authDomain: "afterglow-2cfaa.firebaseapp.com",
  projectId: "afterglow-2cfaa",
  storageBucket: "afterglow-2cfaa.appspot.com",
  messagingSenderId: "1072980975090",
  appId: "1:1072980975090:web:f21a13d9e8bf496ff01f6b",
  measurementId: "G-EHCXH0EFHF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
