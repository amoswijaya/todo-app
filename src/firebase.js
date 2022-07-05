// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCA1-K13GI4k16CSEdBPbBr9no4GOHVJ-o',
  authDomain: 'simple-todo-e8565.firebaseapp.com',
  projectId: 'simple-todo-e8565',
  storageBucket: 'simple-todo-e8565.appspot.com',
  messagingSenderId: '963726750436',
  appId: '1:963726750436:web:01442ca32ac2fa443872f1',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
