const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const authController = require('./controllers/authController');
const getHealthCheck = require('./controllers/getHealthCheck');
authController(app);
getHealthCheck(app);

app.listen(3000);