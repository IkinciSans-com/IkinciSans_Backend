const mongoose = require('mongoose');


// Veritabanı bağlantısı için gerekli yapılandırmaları yapın
const dbOptions = {
  dbName:'IkinciSans',
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Veritabanı bağlantısını gerçekleştirin
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, dbOptions);
    console.log('Connected to the DB succesfully');
  } catch (error) {
    console.error('DB connection err:', error.message);
    process.exit(1); // Uygulamayı kapat
  }
};

module.exports = connectDB;
