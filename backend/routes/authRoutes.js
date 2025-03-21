const express = require('express');
const { signup, login, checkAuth, updateProfile, logout } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/check', protect, checkAuth);
router.put('/update-profile', protect, updateProfile);
router.post('/logout', protect, logout);

module.exports = router;