import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7NyfdQKU6Q28Ut7H9wFeHYqELGwIChTY",
  authDomain: "mbank-32d6d.firebaseapp.com",
  projectId: "mbank-32d6d",
  storageBucket: "mbank-32d6d.firebasestorage.app",
  messagingSenderId: "941323560039",
  appId: "1:941323560039:web:16084fe9d0b3b186d2e0c2",
  measurementId: "G-ZCJBDGT2EV"
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
