import path from 'path';
import { join, dirname } from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import https from "https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const { SERVER_PORT: port = 8080 } = process.env;

app.use(express.static(path.join(__dirname, 'www')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
})

const server = https.createServer(app);

// Run server here
server.listen({port}, () => {
    console.log(`Now listening at http://localhost:${port}`)
});
