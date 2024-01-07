import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT30mqhz6oP30duWM1vGUCN7UNXESUSrE",
  authDomain: "netflixgpt-ef14e.firebaseapp.com",
  projectId: "netflixgpt-ef14e",
  storageBucket: "netflixgpt-ef14e.appspot.com",
  messagingSenderId: "448070208577",
  appId: "1:448070208577:web:07e2a773f7a1ce49034ac0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
