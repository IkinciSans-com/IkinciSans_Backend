router.post('/', async (req, res) => {
  // newItem adlı bir yeni öğe oluşturulur ve req.body kullanılarak alınan veriler ile özellikleri atanır.
  try {
    const newItem = new Item({
      id : req.body.productId,
      name: req.body.productName,
      description: req.body.productDescription,
      category: req.body.productCategory,
      photo: req.body.productPhoto,
      //owner: req.body.owner,
      //createdAt: req.body.createdAt
    });

    // await anahtar kelimesi ile newItem.save() metodu kullanılarak yeni öğe MongoDB veritabanına kaydedilir.
    const savedItem = await newItem.save();

    res.json(savedItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.route('/signup').post(productController.createProduct);

router.route('/login').post(authController.loginUser);


