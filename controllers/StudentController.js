const fs = require('fs');
const path = require('path');
const Student = require('../models/StudentModel.js');

// import student server
const students = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/student.json')));

// Auto Genarate Id
const createId = () => {
    if(students.length > 0){
        return students[students.length - 1].id + 1;
    }else {
        return 1;
    }
}


// Get all Students
const getAllStudents = async (req, res) => {
    
    let all_data = await Student.find();

    res.status(200).json(all_data);

}

// Get Single Student
const getSingleStudent = async (req, res) => {
    
    let id = req.params.id;
    
    let data = await Student.findById(id);
    res.status(200).json(data);

}

// Create Students
const createStudent = async (req, res) => {
    
    await Student.create({
        name : req.body.name,
        age : req.body.age,
        skill : req.body.skill
    });

    res.status(201).json({
        message: 'Student Added Successfully :)'
    });
    
}

// Update Students
const updateStudent = async (req, res) => {
    
    let id = req.params.id;

    await Student.findByIdAndUpdate(id, req.body, {
        new: true
    });

    res.status(200).json({
        message: 'Student Updated Successfully :)'
    });

}


// Delete Students
const deleteStudent = async (req, res) => {
    
    let id = req.params.id;

    await Student.findByIdAndDelete(id);

    res.status(202).json({
        message: "Student Deleted Successfully :)"
    });

}

module.exports = {
    getAllStudents,
    getSingleStudent,
    createStudent,
    updateStudent,
    deleteStudent
}

