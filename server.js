const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoConfig = require('./config/db')


// mongoose.connect(mongoConfig.connectionString).then(() => {
//     console.log("Database connected.");
// }).catch(err => { console.log(err); });

app.use(express.json());

const port = 3000;
app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});