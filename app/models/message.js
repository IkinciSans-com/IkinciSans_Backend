const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  mesajID: {
    type: String,
    required: true,
    unique: true
  },
  gonderen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  alici: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  icerik: {
    type: String,
    required: true
  },
  tarih: {
    type: Date,
    default: Date.now,
    required: true
  }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;