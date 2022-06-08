// require admin model
const Admin = require('../models/AdminModel.js');
const bcrypt = require('bcryptjs');


// Admin Login Method
const adminLogin = async (req, res) => {

    const { email, password } = req.body; 

    let email_check = await Admin.findOne({ email });

    if(!email_check){
        res.status(400).json({
            message : 'Email not found!'
        });
    }else {

        if( await bcrypt.compare(password, email_check.password) ){
            res.status(201).json({
                message : 'Admin Login Successfully :)'
            });
        }else {
            res.status(400).json({
                message : 'Password not match!'
            });
        }
    }

   
}

module.exports = {
    adminLogin
}