var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const userSchema = new mongoose.Schema({
  // name: String
  name: {type: String, maxlength: 5}
});


userSchema.pre('save', true, function handle(next, done){
  console.log('pre save one');
  next();
  setTimeout(done, 6000);
});
userSchema.pre('validate', function(next){
  console.log('pre validate');
  next();  
});
// true: 并行, done：异步继续执行
userSchema.pre('save', true, function handle(next, done){
  console.log('pre save two');
  next();
  setTimeout(done, 3000);
});

userSchema.post('validate', function(){
  console.log('post validate');
  // console.log(this.errors.name.message);
});

userSchema.post('save', function handle(){ // 没有next
  console.log('post save one');
});

userSchema.pre('update', function(next){
  console.log('pre update');
  next();
});

userSchema.post('update', function(){
  console.log('post update');
});

userSchema.pre('remove', function(next){
  console.log('pre remove');
  next();
});

userSchema.post('remove', function(){
  console.log('post remove');
});

const User = mongoose.model('User', userSchema);
User.remove({}, function(){
  var user = new User({name: 'alice'});
  user.save(function(err, u){
    u.update({name: 'ali'}).then(function(result){
      console.log(result);
      u.remove();
    })
  });
});