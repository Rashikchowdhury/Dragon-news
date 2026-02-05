import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
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

    const authData = {
        signUpUser,
        signInUser,
        currentUser,
        loading,
        setLoading,
        updateUserProfile
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;