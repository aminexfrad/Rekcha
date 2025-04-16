const pool = require('../config/db');

const Message = {
  async create({ senderId, receiverId, text, image = null }) {
    const [result] = await pool.execute(
      'INSERT INTO messages (sender_id, receiver_id, text, image) VALUES (?, ?, ?, ?)',
      [senderId, receiverId, text, image]
    );
    return this.findById(result.insertId);
  },

  async findById(id) {
    const [rows] = await pool.execute('SELECT * FROM messages WHERE id = ?', [id]);
    return rows[0];
  },

  async getConversation(user1Id, user2Id) {
    const [rows] = await pool.execute(
      `SELECT * FROM messages 
       WHERE (sender_id = ? AND receiver_id = ?) 
       OR (sender_id = ? AND receiver_id = ?) 
       ORDER BY created_at ASC`,
      [user1Id, user2Id, user2Id, user1Id]
    );
    return rows;
  }
};

module.exports = Message;