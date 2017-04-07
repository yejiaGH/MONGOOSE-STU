const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test");

const User = mongoose.model('User2', new mongoose.Schema({
  loginname: {
    type: String,
    validate: {
      validator(value, cb) {
        User.findOne({loginname: value}, function(err, result){
          cb(!result);
        })
      }
    }
  }
}));

var user1 = new User({loginname: 'alice'});
user1.save(function(err){
  if(err){
    console.log(err);
  }else{
    // var user2 = new User({loginname: 'yejia'});
    var user2 = new User({loginname: 'alice'});
    user2.save(function(err){
      console.log(err, '---- user2');
    });
  }
})