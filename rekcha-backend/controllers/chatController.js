const Message = require('../models/messageModel');
const User = require('../models/userModel');

exports.getMessages = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const currentUserId = req.user.id;

    const messages = await Message.getConversation(currentUserId, userId);
    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};

exports.sendMessage = async (req, res, next) => {
  try {
    const { receiverId, text } = req.body;
    const senderId = req.user.id;
    
    let image = null;
    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    }

    const message = await Message.create({
      senderId,
      receiverId,
      text,
      image
    });

    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.getAllUsersExcept(req.user.id);
    const onlineUsers = await User.getOnlineUsers();
    
    const usersWithStatus = users.map(user => ({
      ...user,
      online: onlineUsers.some(onlineUser => onlineUser.id === user.id)
    }));

    res.status(200).json(usersWithStatus);
  } catch (error) {
    next(error);
  }
};