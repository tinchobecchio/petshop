// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8bK55UtRjdFt4kJP479dyw4IT45w_a3c",
  authDomain: "petshp.firebaseapp.com",
  projectId: "petshp",
  storageBucket: "petshp.appspot.com",
  messagingSenderId: "604529781015",
  appId: "1:604529781015:web:e49f6f99020283b5186f52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirebase = () => app

export {getFirestore}

