const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;


const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

app.listen(port);