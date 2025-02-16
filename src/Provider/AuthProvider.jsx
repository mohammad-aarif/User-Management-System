import { createContext } from "react";
import {auth} from '../Firebase/firebase.init';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext({})
const AuthProvider = ({children}) => {

    const createUser = (email, password) =>{
        console.log(email, password);
        
        return (
        createUserWithEmailAndPassword(auth, email, password)
        .then(user => console.log(user))
        .catch(err => console.log(err)))
    }
    const signInEmail = (email, password) => {
        console.log(email, password)
        return(
        signInWithEmailAndPassword(auth, email, password)
        .then(user => console.log(user))
        .catch(err => console.log(err)))

    }
    const signInGoogle = () =>{
        signInWithPopup(auth)
        .then(user => console.log(user))
        .catch(err => console.log(err)
        )
    }

    
    const userData = {
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