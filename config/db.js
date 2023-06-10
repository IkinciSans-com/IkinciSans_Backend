const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = process.env.DB_URI;
    const connectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'IkinciSans',
    };

    await mongoose.connect(dbURI, connectionOptions);
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

