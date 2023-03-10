const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' });

const app = express();

// parse through application/json
app.use(bodyParser.json());

const PORT = process.env.PORT || 5001

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})