const express = require('express');
const app = express();
const port = 5000

var requestCount = 0;

app.get('/', (req, res) => {
    console.log('Received request number: ',++requestCount);
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});