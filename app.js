const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const books = require('./books');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use('/books', books);

app.get('/', (req, res) => {
  res.redirect('/books/search');
});

app.listen(4242, () => {
  console.log('Listening on http://127.0.0.1:4242');
});
