import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';

function Balance(){
      
   const  [balance,setBalance] = useState(0) ;
   

   useEffect( ()=>{
   
    
         axios.get('http://localhost:3000/payment/vi/account/balance',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }

        }).then(response=>{setBalance(response.data.balance)})
   },[balance])
  

    return (
        <div className=" flex flex-col justify-center h-10 font-semibold  ">
          User's Balance is  ₹ {balance}
        </div>
    )
}

export default Balance