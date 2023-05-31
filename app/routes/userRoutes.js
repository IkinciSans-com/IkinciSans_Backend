const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// İlgili kullanıcıyı almak için GET isteği
router.get('/api/1.0/users/${email}', userController.getUser);

// Yeni bir kullanıcı oluşturmak için POST isteği
router.post('/api/1.0/users', userController.register);

// Bir kullanıcıyla giriş yapmak için POST isteği
router.post('/api/1.0/auth', userController.login);

// Bir kullanıcıyı güncellemek için PUT isteği
router.put('/api/1.0/users/${email}', userController.updateUser);

// Bir kullanıcıyı silmek için DELETE isteği
router.delete('/api/1.0/users/${email}', userController.deleteUser);

module.exports = router;
