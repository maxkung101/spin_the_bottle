const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('www'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

const { SERVER_PORT: port = 8080 } = process.env;

// Run server
app.listen({port}, () => {
    console.log('Now listening at http://localhost:' + port)
});
