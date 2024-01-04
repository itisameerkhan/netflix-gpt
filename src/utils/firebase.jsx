// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqIOA9fyCe65P7GDnlwDC0LBk1rCiOdrA",
  authDomain: "netflixgpt-95882.firebaseapp.com",
  projectId: "netflixgpt-95882",
  storageBucket: "netflixgpt-95882.appspot.com",
  messagingSenderId: "707402762878",
  appId: "1:707402762878:web:65cb07aeba01a5a081262f",
  measurementId: "G-6RKZZYTWS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);