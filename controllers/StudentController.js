
// Get all Students
const getAllStudents = (req, res) => {
    res.send('Ami all studnets dhore felci');
}

// Get Single Student
const getSingleStudent = (req, res) => {
    res.send('Ami single studnet dhore felci');
}

// Create Students
const createStudent = (req, res) => {
    res.send('Ami studnet create kore felci');
}

// Update Students
const putStudent = (req, res) => {
    res.send('Ami studnet update kore felci put method a');
}

// Update Students
const patchStudent = (req, res) => {
    res.send('Ami studnet update kore felci patch method a');
}

// Delete Students
const deleteStudent = (req, res) => {
    res.send('Ami studnet delete kore felci');
}

module.exports = {
    getAllStudents,
    getSingleStudent,
    createStudent,
    putStudent,
    patchStudent,
    deleteStudent
}

