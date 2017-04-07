const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test");

const User = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
    // validate: {
    //   validator(value) {
    //     return value.length <= 9;
    //   }
    // }
  }
}));

User.schema.path('name').validate(function(v) {
  return v.length <= 9;
});

User.schema.path('name').validate(function(v) {
  return v.length > 2;
});

const u = new User({
  // name: 'clwoe29384029'
  name: 'c'
});

const err = u.validateSync();
console.log(err);