const express = require('express');
const path = require('path');
const userController = require('./controllers/userController');
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('/styles.css', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/styles.css'));
});

app.get('/styles1.css', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/styles1.css'));
});

app.get('/client/index.js', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.js'));
});

app.get('/build/mainbundle.js', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/mainbundle.js'));
});

app.get('/build/cardsbundle.js', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/cardsbundle.js'));
});

app.post('/login', userController.login, (req, res) => {
  if (res.locals.success) return res.status(200).sendFile(path.join(__dirname, '../build/cards.html'));
  else return res.status(200).json({});
});

app.post('/signup', userController.signUp, (req, res) => {
  if (res.locals.success) return res.status(200).json(res.locals.user);
  else return res.status(200).json({});
});

app.get('/cards', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
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