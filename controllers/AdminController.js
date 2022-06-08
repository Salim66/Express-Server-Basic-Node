const Admin = require('../models/AdminModel.js');

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

    await Admin.create({
        name : req.body.name,
        email : req.body.email,
        cell : req.body.cell,
        username : req.body.username,
        location : req.body.location,
        skill : req.body.skill,
        password : req.body.password,
    });
    
    res.status(201).json({
        message: 'Admin added successfully :)'
    });

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

    await Admin.findByIdAndDelete(req.params.id);

    res.status(202).json({
        message: 'Admin deleted successfully :)'
    });

}

module.exports = {
    getAllAdmin,
    getSingleAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
}