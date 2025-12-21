// src/context/AuthProvider.jsx
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebase.config"; // ⭐ USE SINGLE AUTH INSTANCE

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register User
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Update Profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    // Login User
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Google Login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Logout
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Track Auth State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const token = localStorage.getItem("access-token");

            if (currentUser && !token) {
                // JWT এখনো আসে নাই → loading রাখো
                return;
            }

            setUser(currentUser);
            setLoading(false);
        });


        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        registerUser,
        loginUser,
        googleLogin,
        updateUserProfile,
        logoutUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
