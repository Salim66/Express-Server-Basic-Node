const dotenv = require('dotenv').config();
const express = require('express');
const { authCheck } = require('./middleware/AuthMiddleware.js');
const app = express();

// Get Server Port
const PORT = process.env.SERVER_PORT;

// Middleware Globally use
app.use(authCheck);

// or

// Individually Check Route By Middlewar
app.get('/salim', authCheck, (req, res, next) => {
    console.log("Salim thake check kora hoccc middleware");
    next();
});


// Create data permission 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/students/', require('./routes/student.js'));


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


