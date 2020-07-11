const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const authController = require('./controllers/authController');
const getHealthCheck = require('./controllers/getHealthCheck');
const projectController = require('./controllers/projectController');

authController(app);
getHealthCheck(app);
projectController(app);

app.listen(3000);