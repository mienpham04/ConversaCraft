import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBB1kXy7JIwvZ7jXmz9iCWqCnZCY6y7BAY",
  authDomain: "conversacraft-2c9fd.firebaseapp.com",
  projectId: "conversacraft-2c9fd",
  storageBucket: "conversacraft-2c9fd.appspot.com",
  messagingSenderId: "1014363300507",
  appId: "1:1014363300507:web:13f1b5bbe23b8a5e8c9c3e",
  measurementId: "G-7F056ZYGFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
