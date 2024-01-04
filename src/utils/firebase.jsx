// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa9J1vj1-dZJA8DOXIdSa-FFJVfSUchYE",
  authDomain: "netflixgpt-2f26e.firebaseapp.com",
  projectId: "netflixgpt-2f26e",
  storageBucket: "netflixgpt-2f26e.appspot.com",
  messagingSenderId: "153470107144",
  appId: "1:153470107144:web:64eb0eaf85e335e0125bbd",
  measurementId: "G-FR1SZ3E9SY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();