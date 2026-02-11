import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const [currentUser, setCurrentUser] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser),
                setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const updateUserProfile = (updatedInfo) => {
        return updateProfile(auth.currentUser, updatedInfo)
    }

    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubProvider = new GithubAuthProvider()

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const authData = {
        signUpUser,
        signInUser,
        currentUser,
        loading,
        setLoading,
        updateUserProfile,
        signInWithGoogle,
        signInWithGithub,
        forgetPassword
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;