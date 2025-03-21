const express = require('express');
const { getUsers, getMessages, sendMessage } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/user', protect, getUsers);
router.get('/:userId', protect, getMessages);
router.post('/send/:userId', protect, sendMessage);

module.exports = router;