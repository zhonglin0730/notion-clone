// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDayT5O3y8iBaeuAKkQNqy5euQZLMlG30U",
  authDomain: "notion-clone-306f6.firebaseapp.com",
  projectId: "notion-clone-306f6",
  storageBucket: "notion-clone-306f6.firebasestorage.app",
  messagingSenderId: "329695924099",
  appId: "1:329695924099:web:928d547121dd3aca5cf0b6"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();