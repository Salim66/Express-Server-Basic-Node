const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

// Get Server Port
const PORT = process.env.SERVER_PORT;

// Create data permission
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/students/', require('./routes/student.js'));


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


