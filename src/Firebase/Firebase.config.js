import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDWwY_MaEKTREaojeQ3iH-pmIa0H8xn1T0",
    authDomain: "coffee-store-c409e.firebaseapp.com",
    projectId: "coffee-store-c409e",
    storageBucket: "coffee-store-c409e.firebasestorage.app",
    messagingSenderId: "927392167643",
    appId: "1:927392167643:web:8e42f2694955df2627befe"
};

const app = initializeApp(firebaseConfig);

// ✅ named export
export const auth = getAuth(app);

// optional: keep default export for app
export default app;
