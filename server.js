const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ratingRoutes = require('./app/routes/ratingRoutes');

const mongoConfig = require('./config/db');

mongoose.connect(mongoConfig.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database connected.');
    // Sunucuyu başlatma veya diğer işlemleri burada gerçekleştirin
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });

app.use(express.json());

const port = 3000;

app.get('/', (req, res) => { res.json({ message: "Welcome to IkinciSans.com!.." }) })
// Rating rotalarını kullanmak için
app.use('/api', ratingRoutes);

app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
