const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// İlgili kullanıcıyı almak için GET isteği
router.get('users/me', userController.getUser);

// Yeni bir kullanıcı oluşturmak için POST isteği
router.post('users/register', userController.register);

// Bir kullanıcıyla giriş yapmak için POST isteği
router.post('users/login', userController.login);

// Bir kullanıcıyı güncellemek için PUT isteği
router.put('/users/:userId', userController.updateUser);

// Bir kullanıcıyı silmek için DELETE isteği
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;