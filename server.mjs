import path from 'path';
import { join, dirname } from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const https = require('https');
const fs = require('fs');
const app = express();
const { SERVER_PORT: port = 8080 } = process.env;

const options = {
  key: fs.readFileSync('www'),
  cert: fs.readFileSync('www')
};

//app.use(express('www'));
app.use(express.static(path.join(__dirname, 'www')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
})

// Run server
app.listen({port}, () => {
    console.log(`Now listening at http://localhost:${port}`)
});
