const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.port;

app.get('/api/contacts', (req, res) => {
    res.status(200).json('Get all contacts');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});