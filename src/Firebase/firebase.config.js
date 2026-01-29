// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFpFEv-cZC5jDe8PS_6Iq3LNhAG-RncNw",
    authDomain: "dragon-news-8c721.firebaseapp.com",
    projectId: "dragon-news-8c721",
    storageBucket: "dragon-news-8c721.firebasestorage.app",
    messagingSenderId: "463965865313",
    appId: "1:463965865313:web:22cf23e145104aa74ff120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)