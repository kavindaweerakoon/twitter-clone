// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, onSnapshot, addDoc, collection, orderBy, query} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgel1to5JWLgqpcZDQ-D9Nq9H4OoVGpVE",
  authDomain: "twitter-clone-86b94.firebaseapp.com",
  projectId: "twitter-clone-86b94",
  storageBucket: "twitter-clone-86b94.appspot.com",
  messagingSenderId: "523183802716",
  appId: "1:523183802716:web:43704cfa97e0da698b1999"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export {db, collection, auth, onSnapshot, addDoc, orderBy, query};
