const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

// Define your routes
app.get('/', (req, res) => {
    res.send('Hello, Encrypted World!');
});

// Read the SSL certificates
const privateKey = fs.readFileSync('ssl/server.key');
const certificate = fs.readFileSync('ssl/server.crt');

// Create an HTTPS server
const server = https.createServer({ key: privateKey, cert: certificate }, app);

// Listen on a port (e.g., 3002)
server.listen(3002, () => {
    console.log('Listening on port 3002 (HTTPS)');
});
