import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

export const AuthContext = createContext();

const Auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName: 'Tauhid'});

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(Auth, email, password);
    }
    const authInfo = {user, createUser};
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default UserContext;