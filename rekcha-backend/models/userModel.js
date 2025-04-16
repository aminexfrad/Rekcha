const pool = require('../config/db');

const User = {
  async create({ fullName, email, password, profilePic = null }) {
    const [result] = await pool.execute(
      'INSERT INTO users (full_name, email, password, profile_pic) VALUES (?, ?, ?, ?)',
      [fullName, email, password, profilePic]
    );
    return this.findById(result.insertId);
  },

  async findByEmail(email) {
    const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  },

  async findById(id) {
    const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },

  async updateProfile(id, { fullName, profilePic }) {
    await pool.execute(
      'UPDATE users SET full_name = ?, profile_pic = ? WHERE id = ?',
      [fullName, profilePic, id]
    );
    return this.findById(id);
  },

  async getAllUsersExcept(id) {
    const [rows] = await pool.execute('SELECT * FROM users WHERE id != ?', [id]);
    return rows;
  },

  async setOnlineStatus(userId, socketId) {
    await pool.execute(
      'INSERT INTO online_users (user_id, socket_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE socket_id = ?',
      [userId, socketId, socketId]
    );
  },

  async setOfflineStatus(socketId) {
    await pool.execute('DELETE FROM online_users WHERE socket_id = ?', [socketId]);
  },

  async getOnlineUsers() {
    const [rows] = await pool.execute(
      'SELECT u.id, u.full_name, u.profile_pic FROM users u JOIN online_users ou ON u.id = ou.user_id'
    );
    return rows;
  }
};

module.exports = User;