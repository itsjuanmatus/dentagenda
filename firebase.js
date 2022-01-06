// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

const db = getFirestore();
export { db };

