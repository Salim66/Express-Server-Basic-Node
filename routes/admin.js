const express = require('express');
const { getAllAdmin, createAdmin, getSingleAdmin, updateAdmin, deleteAdmin } = require('../controllers/AdminController');
const router = express.Router();

router.route('/').get(getAllAdmin).post(createAdmin);
router.route('/:id').get(getSingleAdmin).put(updateAdmin).patch(updateAdmin).delete(deleteAdmin);

module.exports = router;