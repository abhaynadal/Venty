import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyAMyQ3FEl7z0g5eXiqIbgj5cfv9DdZzZzo",
  authDomain: "venty-247c7.firebaseapp.com",
  projectId: "venty-247c7",
  storageBucket: "venty-247c7.appspot.com",
  messagingSenderId: "1006414584040",
  appId: "1:1006414584040:web:21a69d6a8a92b77f92915d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);