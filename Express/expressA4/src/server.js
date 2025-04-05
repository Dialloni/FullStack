const express = require('express');
const app = express();
const port = 3000;
const urlRoutes = require('./router/router.js');

app.use(express.json());
app.use('/', urlRoutes);

app.listen(port, () => {
  console.log(`URL shortener API listening at http://localhost:${port}`);
});