import React from 'react'
import Button from './Button'
import SingleUser from './SingleUser'
import { useState,useEffect } from 'react';
import axios from 'axios'

function User(){

   const [users,setUsers] = useState([]);
   const [filter,setFilter] = useState("");



   const apiUrl = import.meta.env.VITE_API_URL;
   const userUrl = `${apiUrl}/payment/vi/user/bulk?filter=`;


   useEffect(()=>{
    const token = localStorage.getItem("token");
    axios.get(userUrl+filter,
        {
            headers: {
                Authorization: `Bearer ${token}`//Adding token for auth check 
            }
        }

    ).then(response=>{setUsers(response.data.user)})
   },[filter]);

    return (
    
     <div >
        <div className="flex flex-col justify-center  font-semibold  ">
        Users
        </div>
         
         {/*Search */}
         <form className="flex items-center w-full mx-auto my-4">   
    <label  className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input onChange={(e)=>{setFilter(e.target.value)}} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5   " placeholder="Search user name..." required />
    </div>
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</form>


      {users.map((user)=><SingleUser key= {user.userId} user={user?user:null}/>)}
      
    </div>

    )
}

export default User