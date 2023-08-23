import path from 'path';
import { join, dirname } from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const helmet = require('helmet');
const app = express();
const { SERVER_PORT: port = 8080 } = process.env;

//app.use(express('www'));
app.use(express.static(path.join(__dirname, 'www')));

app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        'style-src': ["'self'", "'unsafe-inline'"],
        'worker-src': ["'self'", 'blob:', 'data:'],
        'img-src': ["'self'", 'data:', 'blob:'],
        'font-src': ["'self'"],
        'connect-src': ["'self'", 'https://api.example.com'],
        'media-src': ["'self'", 'blob:', 'data:']
      }
    },
    serviceWorker: {
      allowedScope: '*'
    }
  }));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
})

// Run server
app.listen({port}, () => {
    console.log(`Now listening at http://localhost:${port}`)
});
