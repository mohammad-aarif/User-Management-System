import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="mb-3 bg-gray-600 font-medium py-3 grid grid-cols-5">
            <div className="col-span-2 text-amber-300 mx-auto">User Management</div>
            <div className="flex justify-around col-span-3">
                <NavLink className='text-amber-200 hover:text-amber-700' to='/'>Home</NavLink>
                <NavLink className='text-amber-200 hover:text-amber-700' to='Addnew'>Add User</NavLink>
                <NavLink className='text-amber-200 hover:text-amber-700' to='Login'>Login</NavLink>
                <NavLink className='text-amber-200 hover:text-amber-700' to='Register'>Register</NavLink>
                <NavLink className='text-amber-200 hover:text-amber-700' to='View'>View</NavLink>
            </div>
        </div>
    );
};

export default Nav;