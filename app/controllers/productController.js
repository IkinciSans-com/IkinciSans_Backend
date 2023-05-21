// İlgili modellerin içe aktarılması
const Product = require('../models/product');

// Tüm ürünleri listelemek için işlev
const getAllProducts = async (req, res) => {
  try {
    // Tüm ürünleri veritabanından alın
    const products = await Product.find();

    // Başarılı yanıt döndürün
    res.status(200).json(products);
  } catch (error) {
    // Hata durumunda hata yanıtı döndürün
    res.status(500).json({ error: error.message });
  }
};

// Yeni bir ürün oluşturmak için işlev
const createProduct = async (req, res) => {
  try {
    // Ürün bilgilerini alın
    const { productName, productDescription, productCategory, productPhoto, createdAt } = req.body;

    // Ürün modeli üzerinden yeni bir ürün oluşturun
    const newProduct = new Product({ productName, productDescription, productCategory, productPhoto, createdAt });

    // Ürünü veritabanına kaydedin
    await newProduct.save();

    // Başarılı yanıt döndürün
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    // Hata durumunda hata yanıtı döndürün
    res.status(500).json({ error: error.message });
  }
};

// Bir ürünü güncellemek için işlev
const updateProduct = async (req, res) => {
  try {
    // Güncellenmek istenen ürünün ID'sini alın
    const productId = req.params.id;

    // Güncellenmek istenen ürün bilgilerini alın
    const { productName, productDescription, productCategory, productPhoto } = req.body;

    // Ürünü veritabanında güncelleyin
    await Product.findByIdAndUpdate(productId, { productName, productDescription, productCategory, productPhoto });

    // Başarılı yanıt döndürün
    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    // Hata durumunda hata yanıtı döndürün
    res.status(500).json({ error: error.message });
  }
};

// Bir ürünü silmek için işlev
const deleteProduct = async (req, res) => {
  try {
    // Silinmek istenen ürünün ID'sini alın
    const productId = req.params.id;

    // Ürünü veritabanından silin
    await Product.findByIdAndDelete(productId);

    // Başarılı yanıt döndürün
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    // Hata durumunda hata yanıtı döndürün
    res.status(500).json({ error: error.message });
  }
};

// İhracat işlemleri
module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
};
