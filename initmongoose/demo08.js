const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test");

const User = mongoose.model('User2', new mongoose.Schema({
  loginname: {
    type: String,
    // required: true,
    required: [true, '必须输入'],
    enum: {values: ['abc', 'ddd'], message: '没有在枚举中'},
    validate: {
      validator(value, cb) { // 添加异步验证器
        setTimeout(function(){
          cb(false);
        });
      },
      message: '自定义validator错误! {PATH} - {VALUE}'
    }
  }
}));

const u = new User({
  loginname: 'ddd'
});

// way1
// 同步获得error, validateSync只能得到同步验证器的信息
// const err = u.validateSync();
// console.log(err);

// way2
// 能得到同步验证器、异步验证器的信息
u.validate(function(err){
  const {path, value, message} = err.errors.loginname;
  console.log(path);
  console.log(value);
  console.log(message);
});

// way3
// 能得到同步验证器、异步验证器的信息
// u.save(function(err) {
//   console.log(err); // err可能是底层的错误信息
// });

// way4
// const promise = u.save();
// promise.catch(err => console.log(err)); // err可能是底层的错误信息

// way5
// User.update({}, {loginname: 'alice'}, {runValidators: true}, function(err) {
//   console.log(err); // err可能是底层的错误信息
// });