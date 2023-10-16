const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.port;

app.use(express.json()); // middleware for bod json parsing
app.use('/api/contacts', require('./routes/contacts'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});