const express = require('express');
const router = express.Router();

const { getAllStudents, getSingleStudent, createStudent, updateStudent, deleteStudent } = require('../controllers/StudentController.js');

// router.get('/', getAllStudents);
// router.post('/', createStudent);
// router.get('/:id', getSingleStudent);
// router.put('/:id', putStudent);
// router.patch('/:id', patchStudent);
// router.delete('/:id', deleteStudent);

router.route('/').get(getAllStudents).post(createStudent);
router.route('/:id').get(getSingleStudent).put(updateStudent).patch(updateStudent).delete(deleteStudent);


module.exports = router;