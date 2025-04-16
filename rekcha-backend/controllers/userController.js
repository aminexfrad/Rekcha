const User = require('../models/userModel');

exports.updateProfile = async (req, res, next) => {
  try {
    const { fullName } = req.body;
    let profilePic = null;
    
    if (req.file) {
      profilePic = `/uploads/${req.file.filename}`;
    }

    const user = await User.updateProfile(req.user.id, { fullName, profilePic });
    
    res.status(200).json({
      _id: user.id,
      fullName: user.full_name,
      email: user.email,
      profilePic: user.profile_pic
    });
  } catch (error) {
    next(error);
  }
};

exports.getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    
    res.status(200).json({
      _id: user.id,
      fullName: user.full_name,
      email: user.email,
      profilePic: user.profile_pic,
      createdAt: user.created_at
    });
  } catch (error) {
    next(error);
  }
};