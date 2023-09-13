const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://connorkeyes:D36U8CGSL5maEh9h@studee.tjkzjjf.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  dataSets: {type: [dataSetSchema], default: []}
});

const dataSetSchema = new Schema({
  flashCards: {type: [flashcardSchema], default: []}
});

const flashcardSchema = new Schema({
  front: {type: String, required: true},
  back: {type: String, required: true}
});

const Flashcard = mongoose.model('Flashcard', flashcardSchema);
const DataSet = mongoose.model('Dataset', dataSetSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  Flashcard,
  DataSet,
  User
};