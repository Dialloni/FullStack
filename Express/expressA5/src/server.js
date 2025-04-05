const express = require('express');
const app = express();
const port = 3000;
const router = require('./router/router');

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Todo List API listening at http://localhost:${port}`);
});