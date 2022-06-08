const express = require('express');
const { getAllAdmin, createAdmin, getSingleAdmin, updateAdmin, deleteAdmin } = require('../controllers/AdminController');
const { adminLogin } = require('../controllers/AuthController');
const router = express.Router();

// Admin Manage Route
router.route('/').get(getAllAdmin).post(createAdmin);
router.route('/:id').get(getSingleAdmin).put(updateAdmin).patch(updateAdmin).delete(deleteAdmin);

// Admin Login Route
router.post('/login', adminLogin);

module.exports = router;