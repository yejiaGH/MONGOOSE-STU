const mongoose = require('mongoose');
// mongoose.SchemaType
// es5

// 集成mongoose.SchemaType
// function User (key, opts) {
//   mongoose.SchemaType.call(this, key, opts, 'User');
// }

// User.prototype = Object.create(mongoose.SchemaType.prototype);

// User.prototype.cast = function(val){
//   if(val.loginname && val.password && val.loginname.length > 3) {
//     return {
//       loginname: val.loginname,
//       password: val.password
//     }
//   } else {
//     throw new Error('user has error');
//   }
// }

// mongoose.Schema.Types.User = User;

// es6
class User extends mongoose.SchemaType {
  constructor (key, opts) {
    super(key, opts, 'User');
  }

  cast(val) {
    if(val.loginname && val.password && val.loginname.length > 3) {
      return {
        loginname: val.loginname,
        password: val.password
      }
    } else {
      throw new Error('user has error');
    }
  }
}
mongoose.Schema.Types.User = User;

module.exports = User;