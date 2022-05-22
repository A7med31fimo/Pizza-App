// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyC97ARWu94jf1bd1Lx9VTdrccDjJF7v77U",
  authDomain: "task1-cs303.firebaseapp.com",
  databaseURL: "https://task1-cs303-default-rtdb.firebaseio.com",
  projectId: "task1-cs303",
  storageBucket: "task1-cs303.appspot.com",
  messagingSenderId: "429475062638",
  appId: "1:429475062638:web:c81162630fe48aeda9977f",
  measurementId: "G-PDPYPMT9K9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage =getStorage(app)
export { app, db, auth ,storage};

