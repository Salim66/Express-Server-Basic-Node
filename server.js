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

        if(file.fieldname == 'photo'){
            cb(null, './media/users/')
        }else if(file.fieldname == 'cv'){
            
            cb(null, './media/cv/')
        }
    },
    filename: (req, file, cb) => {

        if(file.fieldname == 'photo'){
            let extName = path.extname(file.originalname);

            let fileName = Date.now() + '_' + Math.round(Math.random() * 100000000) + '.' + extName;

            cb(null, fileName);
        }else if(file.fieldname == 'cv'){
            
            let date = new Date();

            let dateFormat = date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear();

            let fileName = dateFormat + '-' + file.originalname;

            cb(null, fileName);
        }

        
    }
});

// upload
const upload = multer({
    storage: storage,
    limits: (1024*1024),
    fileFilter: (req, file, cb) => {
        
        if(file.fieldname == 'photo'){
            if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/svg' || file.mimetype == 'image/gif' || file.mimetype == 'image/webp'){
                cb(null, true);
            }else {
                console.log('File type invalid!');
            }
        }else if(file.fieldname == 'cv'){
            if(file.mimetype == 'application/pdf'){
                cb(null, true);
            }else {
                console.log('CV format is invalid!');
            }
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

// multiple image fields upload
const cpUpload = upload.fields([
    {
        name: 'photo',
        maxCount: 10
    },
    {
        name: 'cv',
        maxCount: 1
    }
]);

// Upload file
app.post('/upload', cpUpload, (req, res) => {

    console.log(req.files);

});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


