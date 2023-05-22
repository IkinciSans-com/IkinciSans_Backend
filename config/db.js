// MongoDB bağlantısı için gerekli yapılandırmalar

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
    console.log('Database connected succesfully.');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Uygulamayı kapat
  }
};

module.exports = connectDB;
