// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy-mS0zJC-FhzaatyFcst0xDkk6A1BlX8",
  authDomain: "zocial-43ec4.firebaseapp.com",
  projectId: "zocial-43ec4",
  storageBucket: "zocial-43ec4.firebasestorage.app",
  messagingSenderId: "353738373655",
  appId: "1:353738373655:web:a235d8cff976e35ff37a52",
  measurementId: "G-FX26CHC6BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);