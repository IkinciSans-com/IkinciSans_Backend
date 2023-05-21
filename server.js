const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoConfig = require('./config/db')
const productRoutes = require('./app/routes/productRoutes');


const dotnv = require('dotenv');
const conn = require('./config/db.js');

dotnv.config();

// connection to the DB
conn();


// mongoose.connect(mongoConfig.connectionString).then(() => {
//     console.log("Database connected.");
// }).catch(err => { console.log(err); });

app.use(express.json());

const port = 3000;

app.get('/', (req, res) => { res.json({ message: "Welcome to IkinciSans.com!.." }) })
// Product rotalarını kullanmak için
app.use('/api', productRoutes);

app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});