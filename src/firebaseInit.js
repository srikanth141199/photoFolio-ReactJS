// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe_4KVV3B9qAy-ijs852T7Vpq9cX7p1k4",
  authDomain: "photofolio-960c0.firebaseapp.com",
  projectId: "photofolio-960c0",
  storageBucket: "photofolio-960c0.appspot.com",
  messagingSenderId: "1033670763964",
  appId: "1:1033670763964:web:806df95c93dfe0acf0f7b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);