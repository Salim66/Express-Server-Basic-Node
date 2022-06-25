const dotenv = require('dotenv').config();
const express = require('express');
const { authCheck } = require('./middleware/AuthMiddleware.js');
const app = express();
const connectDB = require('./config/db');
const colors = require('colors');
const multer = require('multer');
const path = require('path');

connectDB();

// storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './media/users/')
    },
    filename: (req, file, cb) => {
        let extName = path.extname(file.originalname);

        let fileName = Date.now() + '_' + Math.round(Math.random() * 100000000) + '.' + extName;

        cb(null, fileName);
    }
});

// upload
const upload = multer({
    storage: storage,
    limits: (1024*1024),
    fileFilter: (req, file, cb) => {
        
        if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/svg' || file.mimetype == 'image/gif' || file.mimetype == 'image/webp'){
            cb(null, true);
        }else {
            console.log('File type invalid!');
        }

    }
});

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
app.use('/api/admins/', require('./routes/admin.js'));

// Upload file
app.post('/upload', upload.array('photo', 12), (req, res) => {

    console.log(req.files);

});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


