import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Nav = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <div className="mb-3 bg-gray-600 font-medium py-3 grid grid-cols-5">
            <div className="col-span-2 text-amber-300 mx-auto">User Management</div>
            <div className="flex justify-around col-span-3">
                <div className="">
                    <NavLink className='text-amber-200 px-4 hover:text-amber-700' to='/'>Home</NavLink>
                    <NavLink className='text-amber-200 px-4 hover:text-amber-700' to='Addnew'>Add User</NavLink>
                    <NavLink className='text-amber-200 px-4 hover:text-amber-700' to='Login'>Login</NavLink>
                    <NavLink className='text-amber-200 px-4 hover:text-amber-700' to='Register'>Register</NavLink>
                    <NavLink className='text-amber-200 px-4 hover:text-amber-700' to='View'>View</NavLink>
                </div>
                <div className="">
                    {(user?.displayName)?user?.displayName : user?.email }
                </div>
            </div>
        </div>
    );
};

export default Nav;