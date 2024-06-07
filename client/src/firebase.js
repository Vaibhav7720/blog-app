// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vaibhav-blog-d8c55.firebaseapp.com",
  projectId: "vaibhav-blog-d8c55",
  storageBucket: "vaibhav-blog-d8c55.appspot.com",
  messagingSenderId: "76645740517",
  appId: "1:76645740517:web:9a9dcc10b5a96e091dc90c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
