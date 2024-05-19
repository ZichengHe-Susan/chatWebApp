// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdlSwf7Gj0iKihCUYgANZmE1ze-rQ-dqk",
  authDomain: "chat-33c5a.firebaseapp.com",
  projectId: "chat-33c5a",
  storageBucket: "chat-33c5a.appspot.com",
  messagingSenderId: "104219084708",
  appId: "1:104219084708:web:59d3eed08133141c7b2331",
  measurementId: "G-5RYWWDRLLF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
