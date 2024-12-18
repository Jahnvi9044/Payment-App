import React from 'react'
import { useLocation } from 'react-router-dom'
import CryptoJS from 'crypto-js';
import { NavLink } from 'react-router-dom';

function TransferStatus(){
    
   const location  = useLocation();
   const searchParams = new URLSearchParams(location.search);
   
      //Extract Queries 
       const status = searchParams.get("status");
       const name = searchParams.get("name");
       const amount = searchParams.get("amount");
       console.log(name); 
      console.log(amount);
     // this is becoming mre human readable so i am going to use Crypto-js ----Js Library   
     // const user = userString ? JSON.parse(decodeURIComponent(userString)):null ; 
   
   const statusMessage =
    status === "200"
    ? `Successfully Transferred ₹${amount} to`
    : "Transaction Failed";

   
   console.log("Transfer Status"+status);
   
    return (
        <div className="w-full h-svh flex flex-col justify-center items-center ">
            <div className=" w-[300px] h-auto p-5 flex flex-col justify-center items-center bg-white  rounded-md border border-gray-800">
                <h1 className="font-semibold text-2xl mb-4 text-center">Transfer Status</h1>
                  

                  {/*Tick */}

                  <div className='flex justify-center m-2'>
                 {(status==200)?
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40">
                       <path fill="#bae0bd" d="M20,38.5C9.8,38.5,1.5,30.2,1.5,20S9.8,1.5,20,1.5S38.5,9.8,38.5,20S30.2,38.5,20,38.5z"></path>
                       <path fill="#5e9c76" d="M20,2c9.9,0,18,8.1,18,18s-8.1,18-18,18S2,29.9,2,20S10.1,2,20,2 M20,1C9.5,1,1,9.5,1,20s8.5,19,19,19	s19-8.5,19-19S30.5,1,20,1L20,1z"></path>
                       <path fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="3" d="M11.2,20.1l5.8,5.8l13.2-13.2"></path>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40">
                      <path fill="#f78f8f" d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"></path>
                      <path fill="#c74343" d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"></path>
                      <path fill="#fff" d="M18.5 10H21.5V30H18.5z" transform="rotate(-134.999 20 20)"></path>
                      <path fill="#fff" d="M18.5 10H21.5V30H18.5z" transform="rotate(-45.001 20 20)"></path>
                    </svg>
                 }
                  </div>
                 <br/>
                 {/*status*/} 
                <div className='font-semibold'>
                {statusMessage}
                </div>
               
                <div className='flex m-2'>
                    <div className="bg-green-200 rounded-full h-12 w-12 flex justify-center m-1">
                        <div className='flex flex-col justify-center items-center font-semibold'>
                            {name?name.substring(0,1):'H'}
                        </div>
                    </div>
                    
                    <div className='flex flex-col justify-center items-center'>
                        {name?name:'Harkirat Singh'}
                    </div>

                </div>
            </div>
            <NavLink to={'/'} >Back to Home</NavLink>
        </div>

    )
}

export default TransferStatus 