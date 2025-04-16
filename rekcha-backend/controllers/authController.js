const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { generateToken } = require('../utils/jwtUtils');

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user.id);
    
    res.status(200).json({
      _id: user.id,
      fullName: user.full_name,
      email: user.email,
      profilePic: user.profile_pic,
      token
    });
  } catch (error) {
    next(error);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword
    });

    const token = generateToken(user.id);
    
    res.status(201).json({
      _id: user.id,
      fullName: user.full_name,
      email: user.email,
      profilePic: user.profile_pic,
      token
    });
  } catch (error) {
    next(error);
  }
};