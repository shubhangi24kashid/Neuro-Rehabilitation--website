// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Import authentication

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCbiL3l2Krk0knZyJM_gYmN83Kka4-s3-w",
  authDomain: "neuro-rehab-gaming.firebaseapp.com",
  projectId: "neuro-rehab-gaming",
  storageBucket: "neuro-rehab-gaming.appspot.com", // ✅ Fix storage bucket typo
  messagingSenderId: "778537768137",
  appId: "1:778537768137:web:11a9274107926be28b2918",
  measurementId: "G-JFZVV4P6J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Initialize authentication

// ✅ Export auth for use in Login.jsx, Signup.jsx, and AuthContext.jsx
export { auth };
