const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('<h1>INDEX</h1>');
});

app.get('/display-name', (req,res) =>{
    res.send('<h1>Abubakar Diallo</h1>');
});

app.get('/display-food', (req, res) => {
    res.send(`
        <h1>Pizza</h1>
        <img src="https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg" alt="Pizza">
    `);
});

 
app.get('/display-vacation', (req, res) => {
    res.send('<h1>Manila</h1>');
}
);

app.listen(port, () =>{
    console.log(`Express app listening at http://localhost:${port}`);
})