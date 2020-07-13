const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

// The index.js file inside controllers folder will import all the controllers and pass the app
require('./app/controllers/index')(app);

app.listen(3000);