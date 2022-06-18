// require admin model
const Admin = require('../models/AdminModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


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

            const token = jwt.sign({id: email_check._id}, process.env.JWT_SECRET, {
                expiresIn: "1d"
            });

            res.status(200).json({
                id: email_check._id,
                name: email_check.name,
                email: email_check.email,
                cell: email_check.cell,
                token: token
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