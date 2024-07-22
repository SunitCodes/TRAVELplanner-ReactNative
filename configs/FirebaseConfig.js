// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArvmLY6LKnvGh5VS1tUYqMRmcyilbEynI",
  authDomain: "ai-travel-planner-b5dbd.firebaseapp.com",
  projectId: "ai-travel-planner-b5dbd",
  storageBucket: "ai-travel-planner-b5dbd.appspot.com",
  messagingSenderId: "338625877875",
  appId: "1:338625877875:web:246243cde9ee92aa3e1706"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);