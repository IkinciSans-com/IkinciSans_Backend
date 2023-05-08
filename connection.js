const mongoose = require('mongoose');

const url = 'mongodb+srv://aysenurerkin:<password>@cluster0.1pcp9yc.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB baglantisi basarili'))
  .catch((err) => console.error('MongoDB baglantisi hatasi: ', err));

const Message = require('./Message');

module.exports = { Message };