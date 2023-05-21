const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Tüm ürünleri listelemek için GET isteği
router.get('/', productController.getAllProducts);

// Yeni bir ürün oluşturmak için POST isteği
router.post('/', productController.createProduct);

// Bir ürünü güncellemek için PUT isteği
router.put('/:id', productController.updateProduct);

// Bir ürünü silmek için DELETE isteği
router.delete('/:id', productController.deleteProduct);

module.exports = router;
