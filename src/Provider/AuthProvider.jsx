import { createContext, useEffect, useState } from "react";
import {auth} from '../Firebase/firebase.init';
import axios from "axios";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    useEffect(() =>{
        if(user?.email){
            axios.post('http://localhost:5000/jwt', user.email, {withCredentials: true})
            .then(res => console.log(res.data)
            )

        }
        
    },[user])


    // Creating New User via Email and Password 
    const createUser = (name, email, password) =>{        
        return (
        createUserWithEmailAndPassword(auth, email, password)
        .then(user => {
            setUser(user.user)

            // Data Sending to the Database 
            const emailVerified = user?.user?.emailVerified;
            const createdAt = user?.user?.metadata?.creationTime;
            const lastSignInTime = user?.user?.metadata?.lastSignInTime;
            const newUser = {name, email, emailVerified, createdAt, lastSignInTime}

            fetch('http://localhost:5000/users',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser),
            })
            .then(res => console.log(res))
        })
        .catch(err => console.log(err)))
    }


    // SingIn With Email and Password
    const signInEmail = (email, password) => {
        return(
        signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            setUser(user.user);
            setLoading(false);
            
        })
        .catch(err => console.log(err)))
    }

    // Sing In with Google Provider 
    const signInGoogle = () =>{
        
        signInWithPopup(auth, googleProvider)
        .then(user => {
            setUser(user.user);
            setLoading(false);

            // Sending Data to the Database 
            const name = user?.user?.displayName;
            const email = user?.user?.email;
            const emailVerified = user?.user?.emailVerified;
            const createdAt = user?.user?.metadata?.creationTime;
            const lastSignInTime = user?.user?.metadata?.lastSignInTime;            
            const newUser = {name, email, emailVerified, createdAt, lastSignInTime}


            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser) 
            })
        })
        .catch(err => console.log(err)
        )
    }

    
    const userData = {
        user,
        createUser,
        signInEmail,
        signInGoogle,
    }


    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;