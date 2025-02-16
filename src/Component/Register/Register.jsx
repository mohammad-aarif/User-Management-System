import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        console.log(form);
        
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(name);
        createUser(email, password)
        
    }
    return (
        <div>
            <h1 className="text-4xl text-center text-white">Register</h1>

            <form onSubmit={handleRegister} className="w-3/7 text-gray-300 my-8 mx-auto">
                <input type="text" className="placeholder:text-gray-500 placeholder:italic outline-gray-600  outline focus:outline-green-500 p-2 rounded-sm w-full m-5" name="name" placeholder="Enter Your Name"/><br />
                <input type="email" autoComplete='username' className="placeholder:text-gray-500 placeholder:italic outline-gray-600 outline focus:outline-green-500 p-2 rounded-sm w-full mx-5" name="email" placeholder="Enter Your Email"/><br />
                <input type="password" className="placeholder:text-gray-500 placeholder:italic outline-gray-600 outline focus:outline-green-500 p-2 rounded-sm w-full mx-5 my-5" name="password" placeholder="Enter Password" autoComplete="new-password"/><br />
                <button className="btn outline-gray-600 py-2 rounded-sm mx-5 mb-2 outline focus:bg-blue-400 w-full text-white">Login with Google</button>    
                <input className="btn outline-gray-600 py-2 rounded-sm mx-5 outline focus:bg-green-600 w-full text-white" type="submit" value="Register" />
            <p className="mx-5 my-2 text-xl text-gray-500">Already Have a Account? <NavLink to="/login">Login Now!</NavLink></p>
            </form>
        </div>
    );
};

export default Register;