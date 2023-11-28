import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(app)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
 const [user,setUser] =useState([])
 const [loading,setLoading] =useState(true)
 const axiosPublic = useAxiosPublic()
 const createUser = (email,password)=>{ 
    setLoading(true)
    return createUserWithEmailAndPassword (auth,email,password)
 }

 const signIn = (email,password)=>{
   setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)

 }

 const provider = new GoogleAuthProvider()
 const googleLogIn =()=>{
  setLoading(true)
  return signInWithPopup(auth,provider)
 }
 const logOut =()=>{
setLoading(true)
  return signOut(auth)
 }

 const updateUserProfile =(name,photo)=>{
return updateProfile(auth.currentUser, {
  displayName: name, photoURL:photo
 })

 }

 useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        if(currentUser){
        // give token
         const userInfo ={email:currentUser.email}
         axiosPublic.post('/jwt',userInfo)
         .then(res=>{
          if(res.data.token){
            localStorage.setItem('access-token',res.data.token)
          }
         })
        }
        else{
          // remove token
             localStorage.removeItem('access-token')
        }
        setLoading(false)
     }) 
     return()=>{
       return unsubscribe ()
     }                        
 },[axiosPublic])

 const authInfo ={user ,loading ,createUser,signIn,logOut ,provider,updateUserProfile,googleLogIn}
 return (
  <AuthContext.Provider value={authInfo}>
      {children}                                                                                    
  </AuthContext.Provider>
 );
};

export default AuthProvider;