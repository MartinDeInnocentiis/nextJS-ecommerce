// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQf-SRuzbZbhNxvIAM4LQWuGmfILcW8GI",
  authDomain: "next-shop-8ec6b.firebaseapp.com",
  projectId: "next-shop-8ec6b",
  storageBucket: "next-shop-8ec6b.appspot.com",
  messagingSenderId: "227668763797",
  appId: "1:227668763797:web:4828206567ea633cace79c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);


export { db };
