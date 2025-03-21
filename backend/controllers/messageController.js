const asyncHandler = require('express-async-handler');
const Message = require('../models/Message');
const User = require('../models/User');

// @desc    Get all users
// @route   GET /api/messages/user
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({ _id: { $ne: req.user._id } }).select('-password');
  res.json(users);
});

// @desc    Get messages between two users
// @route   GET /api/messages/:userId
// @access  Private
const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({
    $or: [
      { senderId: req.user._id, receiverId: req.params.userId },
      { senderId: req.params.userId, receiverId: req.user._id },
    ],
  }).sort({ createdAt: 1 });

  res.json(messages);
});

// @desc    Send a message
// @route   POST /api/messages/send/:userId
// @access  Private
const sendMessage = asyncHandler(async (req, res) => {
  const { content } = req.body;

  const message = await Message.create({
    senderId: req.user._id,
    receiverId: req.params.userId,
    content,
  });

  res.status(201).json(message);
});

module.exports = {
  getUsers,
  getMessages,
  sendMessage,
};