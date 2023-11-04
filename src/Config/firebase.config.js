// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM0rwZ2k0m5--vuDf8q38F7SZBxl1NyPM",
  authDomain: "brand-shop-a9147.firebaseapp.com",
  projectId: "brand-shop-a9147",
  storageBucket: "brand-shop-a9147.appspot.com",
  messagingSenderId: "431244279236",
  appId: "1:431244279236:web:0f1e3a99457b37747e7891"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);