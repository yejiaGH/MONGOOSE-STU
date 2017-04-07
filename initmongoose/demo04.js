const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test");

const Obj = mongoose.model("Obj", new mongoose.Schema({
  str: {
    type: String,
    default: 'alice',
    get(v) {
      return v+123;
    },
    set(v) {
      return 123+v;
    }
  },
  loginname: {
    type: String,
    required: true,
  },
  str2: {
    type: String,
    select: false
  }
}));

const o = new Obj({
  str: 'alice',
  str2: '1212121',
  loginname: 'loginbaby',
});

// console.log(o.str);
console.log(o.str2);
o.save(function(err) {
  // Obj.findOne({}, function(err, result){
  //   console.log(result);
  // });
  console.log(err);
});