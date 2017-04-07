require('vcert');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const userSchema = new mongoose.Schema({
  firstName: String,
  secondName: String
});

// 对象的方法
userSchema.methods.getAllName = function(){
  return this.firstName + '.' + this.secondName;
};

// 静态方法
userSchema.statics.getAll = function(cb){
  return this.find({}, cb); // this 表示User类
}

// 虚拟get/set方法, allname是虚拟属性，在数据库中没有体现
userSchema.virtual('allname').get(function(){
  return this.firstName + '.' + this.secondName;
}); // getter method

userSchema.virtual('allname').set(function(v) {
  // jia.ye
  const names = v.split('.');
  this.firstName = names[0];
  this.secondName = names[1];
}); // setter method

const User = mongoose.model('User', userSchema); // users
// const u = new User({
//   firstName: 'jia',
//   secondName: 'ye'
// });
// console.log(u.getAllName());

// User.remove({}).then(function(){
//   User.insertMany([
//     {firstName: 'fN1', secondName: 'sN1'},
//     {firstName: 'fN2', secondName: 'sN2'},
//     {firstName: 'fN3', secondName: 'sN3'}
//   ]).then(function(){
//     User.getAll().then(result => console.log(result));
//   });
// });

var user = new User({
  allname: 'jia.ye'
});

console.log(user);


