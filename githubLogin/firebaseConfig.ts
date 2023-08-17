// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBVRZ2hdcYmUMi0NCcqixyYLPpww4p-Zz0",
  authDomain: "crownshop-c70e5.firebaseapp.com",
  databaseURL: "https://crownshop-c70e5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crownshop-c70e5",
  storageBucket: "crownshop-c70e5.appspot.com",
  messagingSenderId: "874732610958",
  appId: "1:874732610958:web:00211994b5e4d6c355b0df",
  measurementId: "G-W6V85439ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)