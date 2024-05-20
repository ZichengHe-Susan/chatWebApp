import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);  // Initial state set to null
    
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);  // Set the user or null if no user
            console.log(user);  // Log the current user or null
        });
        return () => {
            unsub();  // Correct cleanup function syntax
        }
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
