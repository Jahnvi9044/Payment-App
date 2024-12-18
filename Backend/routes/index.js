const express = require('express');
const app= express();
app.use(express());

const userRoutes = require('./user');
const accountRoutes = require('./account');

const cors = require('cors');
app.use(cors({
  origin: "http://localhost:5173" // Replace with your frontend URL
}));


app.use('/user',userRoutes);
app.use('/account',accountRoutes);

module.exports = app;
