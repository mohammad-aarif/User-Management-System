import { useLoaderData } from "react-router-dom";
import { TbRosetteDiscountCheckFilled, TbTrashX  } from "react-icons/tb";
import { LiaTimesCircleSolid  } from "react-icons/lia";

const ViewUser = () => {
    const user = useLoaderData()
    const handleDeleteUser = id => {
        fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => console.log(res)
        )
        
    } 
    
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
                        <th>Verified</th>
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
                        <td>{data.emailVerified?<TbRosetteDiscountCheckFilled className="text-green-500"/>: <LiaTimesCircleSolid  className="text-red-500"/>}</td>
                        <td><button onClick={() => handleDeleteUser(data._id)} className="bg-red-600 text-white rounded-sm p-2"><TbTrashX /></button></td>
                    </tr>
                    )
                })}
                    
                </tbody>
            </table>
        </div>
    );
};

export default ViewUser;