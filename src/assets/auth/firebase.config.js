// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdwoOxheRw2o5OSlAjHJ9LQjNjsloeyJ8",
  authDomain: "gadget-e-commerce-website.firebaseapp.com",
  databaseURL: "https://gadget-e-commerce-website-default-rtdb.firebaseio.com",
  projectId: "gadget-e-commerce-website",
  storageBucket: "gadget-e-commerce-website.appspot.com",
  messagingSenderId: "705669055003",
  appId: "1:705669055003:web:bab0e27ff06120689aeebe",
  measurementId: "G-N4B638EWPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;