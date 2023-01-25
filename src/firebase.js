// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBPAemV0yNBnbIYbwdW7sgHLI3-5QPz0-8',
  authDomain: 'chat-app-bf94e.firebaseapp.com',
  projectId: 'chat-app-bf94e',
  storageBucket: 'chat-app-bf94e.appspot.com',
  messagingSenderId: '155915269274',
  appId: '1:155915269274:web:e51fead89a38462db35b23',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
