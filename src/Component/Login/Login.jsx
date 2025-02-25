import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {signInEmail, signInGoogle} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInEmail(email, password);
        
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl text-center text-white">Login</h1>
            <form onSubmit={handleLogin} className="text-gray-300 w-3/7 mt-8 mx-auto">
                <input type="email" autoComplete='username' className="placeholder:text-gray-500 placeholder:italic outline-gray-600 outline focus:outline-green-500 p-2 rounded-sm w-full mx-5" name="email" placeholder="Enter Your Email"/><br />
                <input type="password" className="placeholder:text-gray-500 placeholder:italic outline-gray-600 outline focus:outline-green-500 p-2 rounded-sm w-full mx-5 my-5" name="password" autoComplete="current-password" placeholder="Enter Password"/><br />
                <input className="btn outline-gray-600 py-2 rounded-sm mx-5 outline focus:bg-green-600 w-full text-white" type="submit" value="Login" />
                    
                <p className="mx-5 my-2 text-sm text-gray-500">Don't Have a Account? <NavLink to="/register">Register Now!</NavLink></p>
            </form>
            <button onClick={signInGoogle} className="btn outline-gray-600 py-2 px-5 my-1 rounded-sm outline focus:bg-blue-400 text-white">Login with Google</button>
        </div>
    );
};

export default Login;