const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Personal Information</h1>
    <p>First Name: Abubakar</p>
    <p>Last Name: Diallo</p>
    <p>Favorite Food: Fottii</p>
    <p>Favorite Vacation Destination: Manila</p>
  `);
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});