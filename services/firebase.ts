// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDmx75zeKkKPTHZuAHO2DaGlXAQnr4f3m4',
  authDomain: 'medagenda-96f9a.firebaseapp.com',
  projectId: 'medagenda-96f9a',
  storageBucket: 'medagenda-96f9a.appspot.com',
  messagingSenderId: '30722983580',
  appId: '1:30722983580:web:5118f124fd386446ca4f59',
  measurementId: 'G-QJ9XQL3RE0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();
export { db, auth };
