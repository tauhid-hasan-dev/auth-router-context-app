import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'


export const AuthContext = createContext();

const Auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName: 'Tauhid'});

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(Auth, email, password);
    }
    
    const logOut = () =>{
        return signOut(Auth)
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(Auth, googleProvider);
    }
    //we are getting data from firebase and I mean from outside of react thats why we are using useEffect 
    //Cleaning Up Effect: Often, effects create resources that need to be cleaned up before the component leaves the screen, such as a subscription or timer ID. To do this, the function passed to useEffect may return a clean-up function. For example, to create a subscription:

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser)
            console.log('auth sate changed', currentUser)
        })
   
        return ()=>{
           unsubscribe();
        }
    },[])

    const authInfo = {user, createUser, signIn, logOut, signInWithGoogle};
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default UserContext;