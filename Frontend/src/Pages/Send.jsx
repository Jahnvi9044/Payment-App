import {React, useState} from 'react'
import InputBox from '../Components/InputBox'
import Button from '../Components/Button'
import axios from 'axios'
import { useParams,useLocation,useNavigate } from 'react-router-dom';
import CryptoJs from 'crypto-js'


function Send(){

   const [amount, setAmount] = useState(0);
   
   const [loading,setLoading] = useState(false);

   const navigate = useNavigate();
   
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);


   //Extract Queries 
   const userId = searchParams.get("userId");
   const userString = searchParams.get("user");

  // this is becoming mre human readable so i am going to use Crypto-js ----Js Library   
  //    const user = userString ? JSON.parse(decodeURIComponent(userString)):null ; 
   
  const decodeUserString = decodeURIComponent(userString);
  const bytes = CryptoJs.AES.decrypt(decodeUserString,"1234");
  const user = JSON.parse(bytes.toString(CryptoJs.enc.Utf8));


   console.log("user: "+user+ " "+"username: "+user.username)
   const name = user.firstName +" "+user.lastName ;  

  
   console.log("see",import.meta.env.VITE_API_URL);

  
   const apiUrl = import.meta.env.VITE_API_URL;

   const transfer = `${apiUrl}/payment/vi/account/transfer`;
   
   console.log(userId);
    return (
        <div className="w-full h-screen border-gray-600 flex justify-center items-center">
            <div className="w-[300px] h-auto rounded-md border border-gray-700 bg-white flex flex-col justify-center  p-10">
                
              <h1 className=" font-semibold text-2xl mb-5 " > Send Money </h1>
            
         <div className="flex items-center">
           <div className="rounded-full h-12 w-12 bg-green-200 flex justify-center  "> 
              <div className="flex flex-col justify-center h-full font-semibold  ">
                {name.substring(0,1)}
              </div>
            </div>
            <div className=" flex flex-col h-full ml-4 font-normal">
              {name}
            </div>
         </div> 
        <br />
         <InputBox  onChange={(e)=>{ setAmount(e.target.value) }} label={"Amount in (Rs) ₹"} placeholder={"₹"}></InputBox>
         
         <Button onClick={async ()=>{

            setLoading(true)
            const token = localStorage.getItem("token");
            //5 sec delay 
            try{
         
            const response = await axios.post(transfer,{
                amount,
                to:userId
            },{
                headers:
                {
                    Authorization:`Bearer ${token}`
                }
            });
            
          
            console.log("Response");
            // console.log(response.data+" responseStatus:"+response.status+" response:"+response);
           
                
                const amt = amount;
                console.log(amt)
                navigate(`/transferStatus?status=${response.status}&name=${name}&amount=${amt}`);                 
                console.log("navigating");
        }
        catch(e)
        {      
            console.log("Transaction Error:", e||"error aagayi");
          
              setLoading(false);
              navigate(`/transferStatus?status=400&name=${name}&amount=${amount}`);
        }
        finally{
                setLoading(false);
        }

            }}
          
         disabled={loading}
         
         button={"Initiate Transaction"}>
            
         </Button>
         {loading?<h1 className="text-sky-500 text-lg text-center font-semibold " >"..Processing"</h1>:""}

            </div>
            
        </div>

    )
}

export default Send