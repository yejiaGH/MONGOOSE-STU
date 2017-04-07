const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test");

const User = mongoose.model('User2', new mongoose.Schema({
  loginname: {
    type: String,
    required: true,
    validate: {
      validator(value, cb) { // 添加异步验证器
        setTimeout(function(){
          cb(false);
        });
      }
    }
  }
}));

const u = new User({
  loginname: 'alice'
});

// way1
// 同步获得error, validateSync只能得到同步验证器的信息
// const err = u.validateSync();
// console.log(err);

// way2
// 能得到同步验证器、异步验证器的信息
// u.validate(function(err){
//   console.log(err);
// });

// way3
// 能得到同步验证器、异步验证器的信息
// u.save(function(err) {
//   console.log(err); // err可能是底层的错误信息
// });

// way4
// const promise = u.save();
// promise.catch(err => console.log(err)); // err可能是底层的错误信息

// way5
User.update({}, {loginname: 'alice'}, {runValidators: true}, function(err) {
  console.log(err); // err可能是底层的错误信息
});