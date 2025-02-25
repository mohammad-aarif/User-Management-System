import { useLoaderData } from "react-router-dom";
import { TbRosetteDiscountCheckFilled, TbTrashX  } from "react-icons/tb";
import { LiaTimesCircleSolid  } from "react-icons/lia";
import { useEffect, useState } from "react";
import './vewuser.css'
import axios from "axios";

const ViewUser = () => {
    const [user, setUser] = useState([])
    const {usersCount} = useLoaderData()
    const [pageCount, setPageCount] = useState(10)
    const [page, setPage] = useState(0)
    const totalPage = Math.ceil(usersCount / pageCount)
    const pages = [...Array(totalPage).keys()]

    useEffect(() => {
        axios.get(`http://localhost:5000/users?page=${page}&size=${pageCount}`)
        .then(data => setUser(data.data))
    },[page, pageCount])

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
    const handleFilter = e => {
        setPageCount(e.target.value);
        
    }
    const handlePrevBtn = () => {
        if(page > 1){
            setPage(page-1)
        }
    }
    const handleNextBtn = () => {
        if(page < totalPage){
            setPage(page+1)
        }
    }
    
    return (
        <div>
            <h1 className="text-4xl text-center text-white">User Data</h1>
            <div className="flex bg-gray-900 justify-around p-3 m-3">
                <p className="text-gray-300">Filter</p>
                <select onChange={handleFilter} defaultValue={10} className="text-white bg-gray-900">
                    <option value={5}>5 items</option>
                    <option value={10}>10 items</option>
                    <option value={20}>20 items</option>
                    <option value={30}>30 items</option>
                </select>
            </div>
            <table className="border-collapse table-auto mx-auto my-8">
                <thead className="text-gray-300 ">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Since</th>
                        <th>Last Login</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-gray-400">
                
                {user.map((data, index )=> {
                    return(
                    <tr key={data._id}>
                        <td>{++index}</td>
                        <td>{data.name}</td>

                        <td className="flex justify-between items-center">{data.email} {data.emailVerified?<TbRosetteDiscountCheckFilled className=" m-1 text-green-500"/>: <LiaTimesCircleSolid  className="text-red-500 m-1 "/>}</td>

                        <td>{data.createdAt}</td>
                        <td>{data.lastSignInTime}</td>
                        <td><button onClick={() => handleDeleteUser(data._id)} className="bg-red-600 text-white rounded-sm p-2"><TbTrashX /></button></td>
                    </tr>
                    )
                })}
                </tbody>
            </table>

            <div className="flex justify-center">
                <button onClick={handlePrevBtn} className="btn bg-gray-700 hover:bg-gray-800 text-gray-300 text-xl rounded-sm px-3 py-1 m-1">Prev</button>
                {pages.map(data => {
                    const num = data +1;
                    return <button onClick={() =>  setPage(data)} className={`btn bg-gray-700 hover:bg-gray-800 text-gray-300 text-xl rounded-sm px-3 py-1 m-1 ${page == data ? 'pagination-active': undefined}`} key={num}>{num}</button>
                })}
                <button onClick={handleNextBtn} className="btn bg-gray-700 hover:bg-gray-800 text-gray-300 text-xl rounded-sm px-3 py-1 m-1">Next</button>
            </div>
        </div>
    );
};

export default ViewUser;