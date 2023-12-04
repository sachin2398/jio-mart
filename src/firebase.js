import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCdUdAo59nqkWsyKQjDnY0Fr1bp5-quGOs",
    authDomain: "jio-mart-92263.firebaseapp.com",
    projectId: "jio-mart-92263",
    storageBucket: "jio-mart-92263.appspot.com",
    messagingSenderId: "379947694499",
    appId: "1:379947694499:web:28f6aef9dc4211034b4216",
    measurementId: "G-6T8X39YFLT",
    databaseURL: "https://jio-mart-92263-default-rtdb.firebaseio.com/"
  };


  export const app = initializeApp(firebaseConfig);