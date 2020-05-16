const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// Set up the express app
const app = express();

// DEV
// const secret_key = require('./../../config/jwt.secretkey.json').key;
// PROD
const secret_key = process.env.JWT_SECRET_KEY;

const jwt = require('jsonwebtoken');

const token = (req) => req.headers['x-access-token'];
const tokenFreeURLs = ['/login', '/user_create', '/activation', '/token'];
const checkURL = (baseUrl) => tokenFreeURLs.some((URL) => baseUrl.match(URL));
const verifyToken = (token, res, req, next) =>
  jwt.verify(
    token,
    secret_key,
    (err, decoded) =>
      (err && res.status(401).json({ message: 'token is not valid' })) ||
      ((req.decoded = decoded) && next())
  );

// Log requests to the console.
app.use(logger('dev'));

app.use(cors());

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('*', (req, res, next) => {
  (!token(req) &&
    !checkURL(req.baseUrl) &&
    res.status(401).json({ message: 'no token' })) ||
    (token(req) && verifyToken(token(req), res, req, next)) ||
    (checkURL(req.baseUrl) && next());
});

require('./routes')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
  })
);

module.exports = app;
