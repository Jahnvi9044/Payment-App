const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    username:{
       type: String,
       required: true,
       unique:true,
       lowercase: true,
       trim:true,
       minLength:5,
       maxLength:20
    },

    password:{
        type: String,
        required: true,
        trim:true,
    },

    firstName:{
        type: String,
        required: true,
        trim:true,
        minLength:3,
        maxLength:20,

    },
    lastName:{
        type: String,
        required: true,
        trime:true,
        minLength:3,
        maxLength:20,
    }

});


const User = mongoose.model('User',userSchema);

const accountSchema =  new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId, //Reference to User Model
        ref: User,
        required:true
    },
     balance:{
        type: Number,
        required:true
    },

});

const Account = mongoose.model('Account',accountSchema);


const querySchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
const Query = mongoose.model('Query', querySchema);

module.exports={
    User,
    Account,
    Query
}