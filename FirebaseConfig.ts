import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  projectId: "YOUR PROJECT ID",
  storageBucket: "INPUT HERE",
  messagingSenderId: "INPUT HERE",
  appId: "INPUT HERE",
  measurementId: "INPUT HERE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Get Firebase Auth instance
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Firestore Database
export const db = getFirestore(app);
export { auth };
export default app;
