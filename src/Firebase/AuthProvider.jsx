/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import React, { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
//   import app from "./firebase.config";
// import axios from "axios";

    export const AuthContext = createContext(null);
      const auth = getAuth(app);
      const googleProvider = new GoogleAuthProvider();
  
    const AuthProvider = ({ children }) => {
       const [user, setUser] = useState(null);
       const [loading, setLoading] = useState(true)
       const createUser = (email, password) =>{
        setLoading(true);
         return createUserWithEmailAndPassword(auth, email, password);
       }
  
       const signIn = (email, password) => {
        setLoading(true);
           return signInWithEmailAndPassword(auth, email, password);
       }
  
       const logOut = () =>{
        setLoading(true);
        return signOut(auth);
       }
  
    useEffect(() =>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
          console.log('user in the state change', currentUser);
          setUser(currentUser);
          setLoading(false);
         
      });
      return () =>{
        unSubscribe();
      }
    },[])
      const googleSignIn = (value) => {
        setLoading(true);
       return signInWithPopup(auth, googleProvider);
     };
  
     const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
  
    const AuthInfo = {
      user,
      createUser,
      loading,
      signIn,
      logOut,
      googleSignIn,
      signUp,
    };
         return (
            <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
          );
    };
  
  export default AuthProvider;
  