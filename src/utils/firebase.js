// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "blog-35591.firebaseapp.com",
    projectId: "blog-35591",
    storageBucket: "blog-35591.appspot.com",
    messagingSenderId: "261475085252",
    appId: "1:261475085252:web:e71de0ba5a014b151fd291",
    measurementId: "G-3BCQ16XVDZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);