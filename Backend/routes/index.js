
require('dotenv').config()

const express = require('express');
const app= express();


const userRoutes = require('./user');
const accountRoutes = require('./account');




app.use('/user',userRoutes);
app.use('/account',accountRoutes);

module.exports = app;
