const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('www'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

// Run server
app.listen(8080, function () {
    console.log('Now listening at http://localhost:8080')
});
