const express = require('express');
const messageController = require('../controllers/messageController');

const router = express.Router();

//yeni bir mesaj oluşturma
router.post('/messages', messageController.createMessage);

//tüm mesajlari listeleme
router.get('/messages', messageController.getAllMessages);

//belirli bir mesaji getirme
router.get('/messages/:messageId', messageController.getMessage);

//mesaj guncelleme
router.put('/messages/:messageId', messageController.updateMessage);

//mesaj silme
router.delete('/messages/:messageId', messageController.deleteMessage);

module.exports = router;
