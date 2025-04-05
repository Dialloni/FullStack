const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const router = require('./routers/router');


app.use('/', router);

const port = 8000;

app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);