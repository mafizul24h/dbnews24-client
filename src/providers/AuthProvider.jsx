import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(null);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://dbnew24-server.vercel.app/news')
            .then(res => res.json())
            .then(data => {
                setNews(data)
            })
    }, [])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            console.log('User from Auth', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [reload])

    const authInfo = {
        user,
        setUser,
        loading,
        setReload,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        news
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;