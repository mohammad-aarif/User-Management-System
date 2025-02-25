import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center max-h-full my-16">
            <h1 className="text-8xl text-amber-400">404</h1>
            <p className="text-3xl text-gray-300">Page Not Found!</p>
            <NavLink className='btn bg-amber-400 my-2 px-8 py-1 rounded-b-sm hover:bg-amber-500' to='/'>Home</NavLink>
        </div>
    );
};

export default ErrorPage;