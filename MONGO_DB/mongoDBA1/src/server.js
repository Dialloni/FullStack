const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const router = require('./router/router.js');

// Replace <db_password> with your actual MongoDB Atlas password
const mongoUri = 'mongodb+srv://dialoabo:Abcde@cluster0.j1dzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas', error);
});

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Book API listening at http://localhost:${port}`);
});