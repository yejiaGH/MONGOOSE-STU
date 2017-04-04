const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const User = require('./User');

const People = mongoose.model('People', new mongoose.Schema({
  user: User
}));

const o = new People({
  user: {
    loginname: 'alice2',
    password: '123'
  }
});

o.save(function cb(err, result) {
  console.log(err);
});
