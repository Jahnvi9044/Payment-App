const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const {User, Account} = require('../db');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../helper.js');
const {authmiddleware}  = require('../middleware.js');


const app= express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173" // Replace with your frontend URL
}));


const signupSchema = zod.object({
   username: zod.string(),
   password: zod.string().min(8),
   lastName: zod.string(),
   firstName: zod.string(),
   confirmPassword: zod.string().min(8),

})
app.get('/',function(req,res){
    console.log('Hello user');
    res.json({msg:"Hello user"})
});


//signup
app.post('/signup',async function(req,res){

   const signupBody = req.body;
   console.log(signupBody)
   
   const result = signupSchema.safeParse(signupBody);

   if(!result.success)
   {  
     return  res.status(411).json({msg:"InCorrect input "});
       
   }

   const user = await User.findOne({username : req.body.username });
   if(user)
   {
     return res.status(409).json({msg:"User Already exist,needs to sign in "});
     
   }
   
   //check password 

   const password = req.body.password;
   const confirmPassword = req.body.confirmPassword;

   if(password!==confirmPassword)
   {
      return res.status(400).json({msg:"Confirm password does not matched password "});

   }

   const hash = await bcrypt.hash(password,10);

  const  cuser = await User.create({
    username:signupBody.username,
    password:hash,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
   });
   
   const userId = cuser._id;

   //Create an account
   await Account.create({
    userId,
    balance: 1 + Math.random() * 100000 
   })

   
    const token = jwt.sign( {userId} ,jwtSecret);

    res.status(201).json({msg:"Created User Sucessfully ",token})

     
});


const signinSchema = zod.object({
    username:zod.string(),
    password:zod.string(),
});

//signin
app.post('/signin',async function(req,res){
    
  const result = signinSchema.safeParse(req.body);
  
  if(!result.success)
  {
    return res.status(409).json({msg:"Wrong input "});
  }

  try {
    const user = await User.findOne({ username: req.body.username });
    if (user === null) {
        return res.status(409).json({ msg: "User does not exist, needs to sign up" });
    }
    

    const pass = user.password; // The hashed password stored in the database
    const password = req.body.password; // The plaintext password sent in the request
       
    // Compare the plaintext password with the hashed password
    const matched = await bcrypt.compare(password, pass);

    console.log(req.body.username);
    console.log(req.body.password);
    
    if (matched) {
        const userId = user._id;
        const token = jwt.sign({ userId }, jwtSecret);

        res.status(201).json({ msg: "User Successfully Signed in", token });
    } else {
        res.status(411).json({ msg: "Incorrect password" });
    }
} catch (err) {
    console.error("Error during signin:", err);
    res.status(500).json({ msg: "Internal server error" });
}
});

//change passwrod
app.put('/changePassword',authmiddleware, async function(req,res){
    
   try{
    console.log("req.user"+ req.user);
    const userId = req.user?.userId;
    const user = await User.findOne({
      _id: userId
    });
   
    if(!user)
    {
      return res.status(404).json({msg:"User not found "});
    }

    const new_Password = req.body.newPassword;
    if(!new_Password)
    {
      return res.status().json({msg:"Required to input newPassword in body "})
    }
    console.log("new_Password "+new_Password);

       const new_Hash = await bcrypt.hash(new_Password, 10);
       await User.findOneAndUpdate({ _id: userId }, { password: new_Hash });

       res.status(200).send("Password updated successfully");
   } catch (e) {
       console.error("Error while updating the password:", e);
       res.status(500).json({ msg: "Internal server error" });
   }
});



//change firstName and lastName 
app.put('/changeInfo',authmiddleware, async function(req,res){
    
  try{
   console.log("req.user"+ req.user);
   const userId = req.user?.userId;
   const user = await User.findOne({
     _id: userId
   });
  
   if(!user)
   {
     return res.status(404).json({msg:"User not found "});
   }

   const {firstName,lastName} = req.body;

   if(!firstName || !lastName)
   {
     return res.status().json({msg:"Required to input in body : firstName and lastName "})
   }

    const update = await User.findOneAndUpdate({ _id: userId }, { firstName: firstName },{lastName: lastName});
      if(!update)
      {  
       return res.status(411).json({msg:"User Info could not get updated "});
      }
      return res.status(200).json({msg:"User Info updated successfully"});
  } catch (e) {
      console.error("Error while updating the password:", e);
      res.status(500).json({ msg: "Internal server error" });
  }
})


//get info of a user
app.get('/info',authmiddleware,async function(req,res){

    try{
      console.log("req.user"+ req.user);
      const userId = req.user?.userId;
      const user = await User.findOne({
        _id: userId
      });
     
      if(!user)
      {
        return res.status(404).json({msg:"User not found "});
      }
      res.status(200).json(user);
    }
   catch(e)
   {
    console.error("Error in fetching User "+e)
   }


});

//get users 
app.get('/bulk',authmiddleware, async function(req,res){
    
  

  try{
    const filter = req.query.filter||"";
    const users = await User.find({
      $or: [
        {
          firstName:{
            "$regex":filter
          }
        },
        {
          lastName:{
            "$regex":filter
          }
        }
      ]
    });
      
    const user_id = req.user?.userId
    const user_current =await User.findOne({_id:user_id});
    //  console.log(user_current);
    //  console.log(users)
    const filteredUsers = users.filter((user) => user._id.toString() !== user_current._id.toString());

    // console.log(filteredUsers);

    res.status(200).json({
      user:
        filteredUsers.map((user)=>({
          username:user.username,
          firstName:user.firstName,
          lastName:user.lastName,
          userId:user._id
      }))}
    
    );

  }
  catch(e)
  {
    console.error("Error while retreiving ");
  }
})

module.exports = app;
