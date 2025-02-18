import { useLoaderData } from "react-router-dom";

const ViewUser = () => {
    const user = useLoaderData()
    console.log(user);
    
    return (
        <div>
            <h1 className="text-4xl text-center text-white">User Data</h1>
            <table className="border-collapse table-auto mx-auto my-8">
                <thead className="text-gray-300 ">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Since</th>
                        <th>Last Login</th>
                        <th>Varified</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-gray-400">
                
                {user.map(data => {
                    return(
                    <tr key={data._id}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.createdAt}</td>
                        <td>{data.lastSignInTime}</td>
                        <td>{data.emailVarified}</td>
                        <td><button>X</button> <button>Y</button></td>
                    </tr>
                    )
                })}
                    
                </tbody>
            </table>
        </div>
    );
};

export default ViewUser;