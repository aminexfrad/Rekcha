const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { protect } = require('../middlewares/authMiddleware');
const upload = require('../utils/upload');

router.get('/users', protect, chatController.getUsers);
router.get('/messages/:userId', protect, chatController.getMessages);
router.post('/send', protect, upload.single('image'), chatController.sendMessage);

module.exports = router;