const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const MessageSchema = new mongoose.Schema({
  _id: ObjectId,
  content: String,
  recipientId: ObjectId,
  senderId: ObjectId
});
const Message = mongoose.model('message', MessageSchema);

module.exports = Message;