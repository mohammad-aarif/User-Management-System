import { createContext, useState } from "react";
import {auth} from '../Firebase/firebase.init';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) =>{        
        return (
        createUserWithEmailAndPassword(auth, email, password)
        .then(user => console.log(user))
        .catch(err => console.log(err)))
    }

    const signInEmail = (email, password) => {
        return(
        signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            setUser(user.user);
            setLoading(false);
            
        })
        .catch(err => console.log(err)))

    }

    const signInGoogle = () =>{
        console.log("hitted");
        
        signInWithPopup(auth, googleProvider)
        .then(user => {
            setUser(user.user);
            setLoading(false);
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