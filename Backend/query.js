const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {Query} =require('./db')
const app = express();


// Middleware
app.use(bodyParser.json());
app.use(cors());



app.post('/submit', async (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    try {
        const query = new Query({ firstName, lastName, email, message });
        await query.save();

        res.status(201).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'Error submitting form', error });
    }
});


// Route to fetch all queries
app.get('/queries', async (req, res) => {
    try {
        const queries = await Query.find().sort({ createdAt: -1 });
        res.status(200).json(queries);
    } catch (error) {
        console.error('Error fetching queries:', error);
        res.status(500).json({ message: 'Error fetching queries', error });
    }
});
module.exports=app
