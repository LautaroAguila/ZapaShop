// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcLuYahZqLrcujPT7NXtvnyb505wi_zA8",
  authDomain: "zapashop-b98b5.firebaseapp.com",
  projectId: "zapashop-b98b5",
  storageBucket: "zapashop-b98b5.appspot.com",
  messagingSenderId: "46597571148",
  appId: "1:46597571148:web:cda3583f838bb0a49aaae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);