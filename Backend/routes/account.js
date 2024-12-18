const express = require('express');
const app= express();
const cors = require('cors');
const { authmiddleware } = require('../middleware');
const { User, Account } = require('../db');
const mongoose =require('mongoose')

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173" // Replace with your frontend URL
}));

app.get('/',function(req,res){
    console.log('Hello account');
    res.json({msg:"Hello account"})
});

app.post('/transfer',authmiddleware,async function(req,res){
   

    const session = await mongoose.startSession(); // Start the session
    session.startTransaction(); // Begin the transaction

    try{
       
        const {amount,to} = req.body;
        
         
        const account = await Account.findOne({userId : req.user.userId}).session(session)
        // const bal1 = account.balance;
        console.log("balance"+account.balance+ " amount"+amount );
        if(amount>account.balance)
        {   
           await session.abortTransaction();
           console.log("Here")
           return res.status(400).json({msg:"Insufficient Balance"});
        }

        const toAccount = await Account.findOne({userId: to}).session(session);
        // const bal2 = toAccount.balance; 

        if(!toAccount)
        {   
            await session.abortTransaction();
            return res.status(400).json({msg:"Invalid Account , you can not transfer to this Account as it is inValid Account "});
        }
         
        // const left1 = bal1 - amount ;
        // const left2 = bal2 + amount ;
       
        //Making the transfers 
         const id= req.user.userId;
        await Account.updateOne({_id : account._id },{$inc:{balance : -amount}}).session(session);
        await Account.updateOne({_id : toAccount._id },{$inc:{balance : amount}}).session(session);

        await session.commitTransaction();
        session.endSession(); // End the session

        res.status(200).json({msg:"Transfered Successfully "});
    }
    catch(e)
    {
         await session.abortTransaction(); // Abort the transaction on error
        session.endSession(); // Ensure session is ended
        console.error('Transaction failed '+e);
        res.status(500).json({ msg: "Transaction failed", error: e.message });
    }

})


app.get('/balance', authmiddleware , async function(req,res){

    try{
  const account = await Account.findOne({userId: req.user.userId});
  
  if(!account)
  {
    return res.status(411).json({msg:"Could not retreive User Information "})
  }
  const balance = account.balance ; 
  console.log("balance:"+ balance) ; 

  res.status(200).json({balance});
    }
    catch(e)
    {
        console.error("Counld not retreive user balance "+e)
    }

})

module.exports = app;


// This is a Wrong way of doing transaction as if the backend wend done in between the transaction the transcation 
// will be incomplete and there will be inconsistency inthe transaction histoy - Amount x --lost from Account A but , may
//  or may not be added in the balance of account B .

// We have to make sure that the ACID properties are being maintained during the transactions .

 
// await Account.update({
//     userId : req.userId
// },
// {
//     $inc: {
//      balance:-amount
//     }
// });
// await Account.update({
//     userId : to 
// },
// {
//     $inc: {
//      balance:amount 
//     }
// });


// >>>>>>>>>> Note : This is what you should not do :  >>>>>>>>>>>>>>>

// app.post('/transfer',authmiddleware,async function(req,res){

//     try{
         
//         const {amount,to} = req.body;

//         const account = await Account.findOne({
//             userId : req.userId
//         })

//         if(amount>account.balance)
//         { 
//            return res.status(400).json({msg:"Insufficient Balance"});
//         }

//         const toAccount = await Account.findOne({
//             userId: to
//         });

//         if(!toAccount)
//         {
//             return res.status(400).json({msg:"Invalid Account , you can not transfer to this Account as it is inValid Account "});
//         }
        

//         //Making the transfers 
//         await Account.update({
//             userId : req.userId
//         },
//         {
//             $inc: {
//              balance:-amount
//             }
//         });
//         await Account.update({
//             userId : to 
//         },
//         {
//             $inc: {
//              balance:amount 
//             }
//         });
//     }
//     catch(e)
//     {
//         console.error('Transaction failed '+e);
//     }

// })

// >>>>>>>>>>>>>>> Note : This is what you should Do: >>>>>>>>>>

// This problem can be solved using 'session' 



// Now even if concurrent requests are comming, the user will not able to bluff the backend.

// If you want to test the code with concurrent requests see the screen screenshots.


