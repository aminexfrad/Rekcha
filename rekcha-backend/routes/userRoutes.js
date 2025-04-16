const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const upload = require('../utils/upload');

router.get('/profile', protect, userController.getProfile);
router.put('/profile', protect, upload.single('profilePic'), userController.updateProfile);

module.exports = router;