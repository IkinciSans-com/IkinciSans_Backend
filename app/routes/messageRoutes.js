const express = require('express');
const messageController = require('../controllers/messageController');

const router = express.Router();

//yeni bir mesaj oluşturma
router.post('/', messageController.createMessage);

//tüm mesajlari listeleme
router.get('/', messageController.getAllMessages);

//belirli bir mesaji getirme
router.get('/:messageId', messageController.getMessage);

//mesaj guncelleme
router.put('/:messageId', messageController.updateMessage);

//mesaj silme
router.delete('/:messageId', messageController.deleteMessage);

module.exports = router;
