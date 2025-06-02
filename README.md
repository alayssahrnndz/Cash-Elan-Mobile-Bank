Cash Elan Mobile Bank 🏦📱
A modern mobile banking application built with React Native and Expo for Android.

Features
Account management and balance viewing
Money transfers and bill payments
Transaction history with search
Secure authentication (biometric/PIN)
Real-time notifications
Multi-language support
Quick Start
Clone and install
bash
git clone https://github.com/alayssahrnndz/Cash-Elan-Mobile-Bank.git
cd Cash-Elan-Mobile-Bank
npm install
Configure Firebase 🔥 Create a Firebase project and add your config:
javascript
// firebase.config.js
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
Environment variables
env
# .env
EXPO_PUBLIC_FIREBASE_API_KEY=your-api-key-here
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
# ... add other Firebase config
Start development
bash
npx expo start
Firebase Setup Required
Create Firebase project at console.firebase.google.com
Enable Authentication and Firestore
Replace Firebase config with your own API keys
Set up security rules for database access
Build for Production
bash
# Android
npx expo build:android
Security Notes
⚠️ Important: Never commit Firebase API keys to version control. Always use environment variables and replace the example configuration with your own Firebase project credentials.

Tech Stack
React Native + Expo
Firebase (Auth, Firestore, Storage)
TypeScript
React Navigation
Made with ❤️ by the Cash Elan Team

