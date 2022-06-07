const fs = require('fs');
const path = require('path');

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
const getAllStudents = (req, res) => {
    if(students.length > 0){
        res.status(200).json(students);
    }else {
        res.status(400).json({
            message : 'No Data Available!'
        });
    }
}

// Get Single Student
const getSingleStudent = (req, res) => {
    
    let id = req.params.id;
    
    if(students.some(data => data.id == id)){

        res.send(students.find(data => data.id == id));

    }else {
        res.status(400).json({
            message : 'Data Not Found!'
        });
    }

}

// Create Students
const createStudent = (req, res) => {
    
    if(req.body.name == '' || req.body.age == '' || req.body.skill == ''){
        res.status(404).json({
            message : 'All Fields Are Required!'
        });
    }else {
        students.push({
            id : createId(),
            name : req.body.name,
            age : req.body.age,
            skill : req.body.skill,
        })

        fs.writeFileSync(path.join(__dirname, '../data/student.json'), JSON.stringify(students));

        res.status(201).json({
            message : 'Data added successfully ):'
        });
    }

}

// Update Students
// const putStudent = (req, res) => {
    
//     let id = req.params.id;

//     if(students.some(stu => stu.id == id)){

//         let data = '';
//         req.on('data', (chunk) => {

//             data += chunk.toString();
//             console.log(data);

//         });
//         req.on('end', () => {
            
//             // students[students.findIndex( stu => stu.id == id )] = {
//             //     id : id,
//             //     name : s_data.name,
//             //     age : s_data.age,
//             //     skill : s_data.skill,
//             // };

//             // fs.writeFileSync(path.join(__dirname, '../data/student.json'), JSON.stringify(students));

//             // res.status(202).json({
//             //     message : 'Data Updated Successfully'
//             // });

//         });
//     }else {
//         res.status(400).json({
//             message : 'Data Not Found!'
//         });
//     }

// }

// Update Students
const patchStudent = (req, res) => {
    res.send('Ami studnet update kore felci patch method a');
}

// Delete Students
const deleteStudent = (req, res) => {
    
    let id = req.params.id;

    if(students.some(data => data.id == id)){
        let updated_data = students.filter(data => data.id != id);
        fs.writeFileSync(path.join(__dirname, '../data/student.json'), JSON.stringify(updated_data));

        res.status(202).json({
            message : 'Data deleted successfully ):'
        });
    }else {
        res.status(400).json({
            message : 'Data Not Found!'
        });
    }

}

module.exports = {
    getAllStudents,
    getSingleStudent,
    createStudent,
    putStudent,
    patchStudent,
    deleteStudent
}

