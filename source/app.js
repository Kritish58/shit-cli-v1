const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.disable('x-powered-by');
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('', routes);

module.exports = app;
