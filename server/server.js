const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/styles.css', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/styles.css'));
});

app.get('/client/index.js', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.js'));
});

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));