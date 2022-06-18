const express = require('express');
const { getAllAdmin, createAdmin, getSingleAdmin, updateAdmin, deleteAdmin, adminHome, adminProfile } = require('../controllers/AdminController');
const { adminLogin } = require('../controllers/AuthController');
const { authCheck } = require('../middleware/AuthMiddleware');
const router = express.Router();

router.get('/profile', authCheck, adminProfile);
router.get('/home', authCheck, adminHome);

// Admin Manage Route
router.route('/').get(getAllAdmin).post(createAdmin);
router.route('/:id').get(getSingleAdmin).put(updateAdmin).patch(updateAdmin).delete(deleteAdmin);

// Admin Login Route
router.post('/login', adminLogin);

module.exports = router;