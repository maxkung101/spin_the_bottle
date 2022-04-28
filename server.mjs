import { join } from 'path';
import express from 'express';

const app = express();
const { SERVER_PORT: port = 8080 } = process.env;

app.use(express('www'));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
})

// Run server
app.listen({port}, () => {
    console.log(`Now listening at http://localhost:${port}`)
});
