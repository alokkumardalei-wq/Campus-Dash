// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfQzNr0_VjycFgRdHjh3IS7-sq1k4pQu4",
    authDomain: "campusdash-d26a8.firebaseapp.com",
    projectId: "campusdash-d26a8",
    storageBucket: "campusdash-d26a8.firebasestorage.app",
    messagingSenderId: "347242415328",
    appId: "1:347242415328:web:dd8c4491f262675a9c3c85",
    measurementId: "G-7FR8G45S4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;