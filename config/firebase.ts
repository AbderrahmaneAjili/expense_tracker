// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYT-qbBHvrizuU1zMIS9DLtGWCoUaatzs",
  authDomain: "expense-tracker-fdd26.firebaseapp.com",
  projectId: "expense-tracker-fdd26",
  storageBucket: "expense-tracker-fdd26.firebasestorage.app",
  messagingSenderId: "467559776212",
  appId: "1:467559776212:web:e27a0f40ddffa1db0aa041",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

//db
export const firestore = getFirestore(app);
