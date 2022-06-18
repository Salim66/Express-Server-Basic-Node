const { nextTick } = require("process");
const jwt = require('jsonwebtoken');
const Admin = require("../models/AdminModel");


const authCheck = async (req, res, next) => {
    

    if(req.headers.authorization){

        // get token
        const token = req.headers.authorization.split(' ')[1];

        // verify token
        const { id } = jwt.verify(token, process.env.JWT_SECRET);

        // get login user data
        req.user = await Admin.findById(id);

        next()

    }else {
        res.json({
            message : 'Token is not found!'
        });
    }

    
}


module.exports = {
    authCheck
}