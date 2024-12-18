const express = require('express');
const mongoose = require('mongoose');
const app = express();
const mainRouter = require('./routes/index')
const query = require('./query')
const {rateLimit} = require('express-rate-limit');
const cors = require('cors');
const {dbstring} = require('./helper')
app.use(cors({
  origin: "http://localhost:5173" // Replace with your frontend URL
}));
app.use(express.json());



const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    limit: 30, // each IP can make up to 10 requests per `windowsMs` (1 minutes)
    standardHeaders: true, // add the `RateLimit-*` headers to the response
    legacyHeaders: false, // remove the `X-RateLimit-*` headers from the response
    message:"Too many request at a time "
  });
  app.use(limiter);

  //database Connection 
const  dbConnection = async()=>{
   try
   {
    await mongoose.connect(dbstring);
    console.log('Sucessfully Connected to Database');
   }
   catch(err)
   { 
    console.log('Counld not Connect to Database, due to '+ err);

   }
};



app.use('/payment/vi', mainRouter);

app.use('/payment/vi/query', query);

// /payment/vi/user/signup
// /payment/vi/user/signin
// /payment/vi/user/changePassword

// /payment/vi/account/transferMoney
// /payment/vi/account/balance

app.get('/',function(req,res){
    console.log("Hello");
    res.json({msg:"Hello"});
 
});

app.listen(3000,()=>{
    dbConnection();
    console.log("Listen at Port: 3000 ");
});
