import { Children, createContext } from "react";

export const AuthContext = createContext({})
const AuthProvider = ({children}) => {
    console.log(children);
    

    const userData = {
        name: 'arif'
    }


    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;