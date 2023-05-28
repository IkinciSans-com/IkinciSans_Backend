const express = require('express');
const ratingController = require('../controllers/ratingController');

const router = express.Router();

// Yeni bir derecelendirme oluşturma
router.post('/ratings', ratingController.createRating);

// Tüm derecelendirmeleri listeleme
router.get('/ratings', ratingController.getAllRatings);

// Belirli bir kullanıcının derecelendirmelerini getirme
router.get('/users/:userId/ratings', ratingController.getUserRatings);

// Derecelendirme güncelleme
router.put('/ratings/:ratingId', ratingController.updateRating);

// Derecelendirme silme
router.delete('/ratings/:ratingId', ratingController.deleteRating);

// Belirli bir kullanıcının tüm ürünlerine ait derecelendirmelerinin ortalamasını getirme
router.get('/users/:userId/rating/average', ratingController.getUserRatingAverage);

module.exports = router;
