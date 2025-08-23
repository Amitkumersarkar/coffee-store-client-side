import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 🔹 Create new user (Sign Up)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // 🔹 Login with email & password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // 🔹 Google Sign-In
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // 🔹 Log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // 🔹 Track user state (so refresh won’t log out)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
    };

    return (
        <authContext.Provider value={userInfo}>{children}</authContext.Provider>
    );
};

export default AuthProvider;
