### Cash Elan Mobile Bank 🏦📱

A modern mobile banking application built with **React Native** and **Expo** for Android.

---

## ✨ Features

- 🧾 Account management and balance viewing  
- 💸 Money transfers and bill payments  
- 📜 Transaction history with search  
- 🔒 Secure authentication (biometric/PIN)  
- 🔔 Real-time notifications  
- 🌍 Multi-language support  

---

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/alayssahrnndz/Cash-Elan-Mobile-Bank.git
cd Cash-Elan-Mobile-Bank
npm install
````

### 2. Configure Firebase 🔥

Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com) and add your config:

```javascript
// firebase.config.js
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

> 🔐 **Security Tip**: Never commit your real Firebase credentials. Use environment variables instead.

### 3. Environment Variables

Create a `.env` file at the root:

```env
# .env
EXPO_PUBLIC_FIREBASE_API_KEY=your-api-key-here
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
# Add other Firebase config as needed
```

---

## 🧪 Start Development

```bash
npx expo start
```

---

## 📦 Build for Production

```bash
# Android
npx expo build:android
```

---

## 🔐 Firebase Setup Notes

* Create a Firebase project
* Enable **Authentication** and **Firestore Database**
* Replace config values with your actual Firebase credentials
* Set up appropriate **security rules** for production

---

## 🛠️ Tech Stack

* React Native + Expo
* Firebase (Auth, Firestore, Storage)
* TypeScript
* React Navigation

---

## 🧡 Made with Love

Crafted with ❤️ by the **Cash Elan Team**
