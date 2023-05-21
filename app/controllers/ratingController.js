const Rating = require('../models/rating');
const mongoose = require('mongoose');

// Derecelendirme oluşturma
exports.createRating = async (req, res) => {
  try {
    const { userId, productId, rating, comment } = req.body;

    const existingRating = await Rating.findOne({ user: userId, product: productId });
    if (existingRating) {
      return res.status(400).json({ error: 'Bu kullanıcı zaten bu ürün için bir derecelendirme yapmış.' });
    }

    const newRating = new Rating({
      user: userId,
      product: productId,
      rating,
      comment
    });

    const savedRating = await newRating.save();

    res.status(201).json(savedRating);
  } catch (error) {
    console.log(error); // Hata mesajını konsola yazdır
    res.status(500).json({ error: 'Derecelendirme oluşturulurken bir hata oluştu.' });
  }
};

// Tüm derecelendirmeleri listeleme
exports.getAllRatings = async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.status(200).json(ratings);
  } catch (error) {
    console.log(error); // Hata mesajını konsola yazdır
    res.status(500).json({ error: 'Derecelendirmeler getirilirken bir hata oluştu.' });
  }
};

// Belirli bir kullanıcının derecelendirmelerini getirme
exports.getUserRatings = async (req, res) => {
  try {
    const userId = req.params.userId;
    const ratings = await Rating.find({ user: userId });
    res.status(200).json(ratings);
  } catch (error) {
    console.log(error); // Hata mesajını konsola yazdır
    res.status(500).json({ error: 'Derecelendirmeler getirilirken bir hata oluştu.' });
  }
};

// Derecelendirmeyi güncelleme
exports.updateRating = async (req, res) => {
    try {
      const ratingId = req.params.ratingId;
      const { rating, comment } = req.body;
  
      const existingRating = await Rating.findById(ratingId);
      if (!existingRating) {
        return res.status(404).json({ error: 'Derecelendirme bulunamadı.' });
      }
  
      // Kullanıcının aynı ürün için daha önce rating yapmış olup olmadığını kontrol et
      const existingUserRating = await Rating.findOne({ user: existingRating.user, product: existingRating.product });
      if (existingUserRating && existingUserRating._id.toString() !== ratingId) {
        return res.status(400).json({ error: 'Bu kullanıcı zaten bu ürün için bir derecelendirme yapmış.' });
      }
  
      existingRating.rating = rating;
      existingRating.comment = comment;
  
      const updatedRating = await existingRating.save();
  
      res.status(200).json(updatedRating);
    } catch (error) {
      console.log(error); // Hata mesajını konsola yazdır
      res.status(500).json({ error: 'Derecelendirme güncellenirken bir hata oluştu.' });
    }
  };
  
  // Derecelendirme silme
  exports.deleteRating = async (req, res) => {
    try {
      const ratingId = req.params.ratingId;
  
      const deletedRating = await Rating.findByIdAndDelete(ratingId);
  
      if (!deletedRating) {
        return res.status(404).json({ error: 'Derecelendirme bulunamadı.' });
      }
  
      res.status(200).json({ message: 'Derecelendirme başarıyla silindi.' });
    } catch (error) {
      console.log(error); // Hata mesajını konsola yazdır
      res.status(500).json({ error: 'Derecelendirme silinirken bir hata oluştu.' });
    }
  };
  
// Belirli bir kullanıcının tüm ürünlerine ait rating ortalamasını getirme
exports.getUserRatingAverage = async (req, res) => {
  try {
    const userId = mongoose.Types.ObjectId(req.params.userId); // ObjectId oluştur
    
    const ratings = await Rating.find({ user: userId });
    if (ratings.length === 0) {
      return res.status(404).json({ error: 'Bu kullanıcının henüz derecelendirmesi bulunmamaktadır.' });
    }

    const totalRatings = ratings.length;
    const totalRatingSum = ratings.reduce((sum, rating) => sum + rating.rating, 0);
    const averageRating = totalRatingSum / totalRatings;

    res.status(200).json({ averageRating });
  } catch (error) {
    console.log(error); // Hata mesajını konsola yazdır
    res.status(500).json({ error: 'Kullanıcının derecelendirme ortalaması getirilirken bir hata oluştu.' });
  }
};