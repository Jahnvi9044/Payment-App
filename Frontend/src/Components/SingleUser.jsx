import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import CryptoJs from 'crypto-js'


function SingleUser({user}){

   const navigate = useNavigate();
     
   const name = user.firstName+" "+user.lastName;
    return (
       
        <div className="h-14 flex justify-between">
        <div className="flex">
         <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center  "> 
            <div className="flex flex-col justify-center h-full font-semibold  ">
              {name.substring(0,1)}
            </div>
          </div>
          <div className=" flex flex-col justify-center h-full ml-4 font-normal">
            {name}
          </div>
         </div> 
     
      
      <div className="flex flex-col justify-center h-full font-semibold">
         <Button onClick={()=>{
            //I am not using this way because it was becoming very humam readable 
            // const serializedUser = encodeURIComponent(JSON.stringify(user));
           
            //encrypt the user
            const encryptedUser = CryptoJs.AES.encrypt(JSON.stringify(user),"1234").toString();
            navigate(`/send/?userId=${user.userId}&user=${encodeURIComponent(encryptedUser)}`) //it is important to encode encryptedUser - as encryptedUser may contain +,= charcaters which may cause error in the url -beacuse they are for 
         }} button={"Pay Now"}></Button>
      </div>
     
  </div>
    )
}

export default SingleUser