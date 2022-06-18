const Admin = require('../models/AdminModel.js');
const bcrypt = require('bcryptjs');

// Get All Admin
const getAllAdmin = async (req, res) => {

    let all_data =  await Admin.find();
    
    res.status(200).json(all_data);

}

// Get Single Admin
const getSingleAdmin = async (req, res) => {

    let data =  await Admin.findById(req.params.id);
    
    res.status(200).json(data);

}

// Create Admin
const createAdmin = async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(req.body.password, salt); 

    if( !req.body.name || !req.body.email || !req.body.cell || !req.body.cell || !req.body.username ){
        res.status(400).json({
            message: 'All fields are required!'
        });
    }else {
        await Admin.create({
            name : req.body.name,
            email : req.body.email,
            cell : req.body.cell,
            username : req.body.username,
            location : req.body.location,
            skill : req.body.skill,
            password : hash_password,
        });
        
        res.status(201).json({
            message: 'Admin added successfully :)'
        });
    }



}

// update Admin
const updateAdmin = async (req, res) => {

    await Admin.findByIdAndUpdate(req.params.id, {
        name : req.body.name,
        email : req.body.email,
        cell : req.body.cell,
        username : req.body.username,
        location : req.body.location,
        skill : req.body.skill,
        password : req.body.password,
    }, { now: true });
    
    res.status(202).json({
        message: 'Admin updated successfully :)'
    });

}

// delete admin
const deleteAdmin = async (req, res) => {

    let delete_data = await Admin.findByIdAndDelete(req.params.id);

    if( !delete_data ){
        res.status(400).json({
            message: 'Data not found!'
        });
    }else {
        let data = await Admin.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: `Delete ${ data.name } data`
        });
    }

   

}

// Admin Profile
const adminProfile = (req, res) => {
    res.json(req.user);
}

// Admin Home
const adminHome = (req, res) => {
    res.json(req.user);
}

module.exports = {
    getAllAdmin,
    getSingleAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    adminProfile,
    adminHome
}