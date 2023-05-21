const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Sahip olabileceği özellikler 
const itemSchema = new Schema({
  productName: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    required: true,
    trim: true
  },
  productCategory: {
    type: String,
    required: true
  },
  productPhoto: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  
  /*
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  productId: {
    type: String,
    required: true,
    unique: true
  }

  */
});

// Item adlı bir Mongoose modeli oluşturulur ve bu model, itemSchema şemasını kullanarak öğelerin MongoDB veritabanında kaydedilmesini sağlar.
const Item = mongoose.model('Item', itemSchema);

// Model, module.exports kullanılarak dışa aktarılır ve routes dosyalarında kullanılabilir.
module.exports = Item;
