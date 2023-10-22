const express = require('express');
const errorHandler = require('./middleware/error_handler');
const databaseConnect = require('./config/database_connection');
const dotenv = require('dotenv').config();

databaseConnect();
const app = express();

app.use(express.json()); // middleware for bod json parsing
app.use(errorHandler);   // middleware for handling errors

app.use('/api/contacts', require('./routes/contacts'));

const port = process.env.port;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});