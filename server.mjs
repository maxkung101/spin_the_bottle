import { join, dirname } from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(express('www'));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
})

const { SERVER_PORT: port = 8080 } = process.env;

// Run server
app.listen({port}, () => {
    console.log(`Now listening at http://localhost:${port}`)
});
