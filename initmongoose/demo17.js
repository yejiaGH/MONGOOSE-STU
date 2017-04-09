var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.plugin(plugin); // 全局，在创建schema之前加入
function plugin(schema, options) {
  schema.pre('save', function(next){
    if(this.createTime) {
      this.updateTime = new Date();
    } else{
      this.createTime = this.updateTime = new Date();
    }
    next();
  });

  schema.pre('update', function(next){
    this.updateTime = new Date();
    next();
  })
}

const userSchema = new mongoose.Schema({
  name: String,
  qq: String,
  createTime: Date,
  updateTime: Date
});
// userSchema.plugin(plugin);

const bookSchema = new mongoose.Schema({
  name: String,
  createTime: Date,
  updateTime: Date
});
// bookSchema.plugin(plugin);

const User = mongoose.model('User', userSchema);
const Book = mongoose.model('Book', bookSchema);

const user = new User({
  name: 'alice',
  qq: '7408'
});
const book = new Book({
  name: 'node.js book'
});

user.save(function(){
  setTimeout(function(){
    user.name = 'bre';
    user.save();
  },3000);  
});
book.save();