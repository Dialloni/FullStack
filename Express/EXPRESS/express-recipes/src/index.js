const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/yourname/:name", (req, res) => {
    res.send(`<h1>Hel~lo, ${req.params.name}!</h1>`);
});

app.post('/postdata', (req, res) => {
    console.log("Post Data", req.body);
    res.send("Data received");

    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});