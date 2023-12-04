
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBycyKOeU62OBVkVaNnH7ZvXwrc0BqK1yc",
  authDomain: "woodfans-2ebc9.firebaseapp.com",
  projectId: "woodfans-2ebc9",
  storageBucket: "woodfans-2ebc9.appspot.com",
  messagingSenderId: "401858827381",
  appId: "1:401858827381:web:4302ed514568e16e26d43c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
