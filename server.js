const express = require('express');
const app = express();
const mongoConfig = require('./config/db')
const dotnv = require('dotenv');
const port = 3000;
const ratingRoutes = require('./app/routes/ratingRoutes');

dotnv.config();

// connection to the DB
mongoConfig();
app.use(express.json());
app.get('/', (req, res) => { res.json({ message: "Welcome to IkinciSans.com!.." }) })

// Rating rotalarını kullanmak için
app.use('/api', ratingRoutes);

app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});
