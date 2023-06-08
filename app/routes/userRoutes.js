const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// İlgili kullanıcıyı almak için GET isteği
router.get('/1.0/users/${email}', userController.getUser);

//tüm kullanıcıların getirilmesi lazım.
router.get('/1.0/users', userController.getUsers);

// Yeni bir kullanıcı oluşturmak için POST isteği
router.post('/1.0/users', userController.signup);

// Bir kullanıcıyla giriş yapmak için POST isteği
router.post('/1.0/auth', userController.login);

// Bir kullanıcıyı güncellemek için PUT isteği
router.put('/1.0/users/${email}', userController.updateUser);

// Bir kullanıcıyı silmek için DELETE isteği
router.delete('/1.0/users/${email}', userController.deleteUser);

module.exports = router;
