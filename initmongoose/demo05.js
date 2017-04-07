const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test");
const baseDateNum = Date.now();
const Obj = mongoose.model("Obj", new mongoose.Schema({
  str: {
    type: String,
    enum: ['aaa', 'bbb']
  },
  qq: {
    type: String,
    match: /^\d*$/,
    maxlength: 20,
    minlength: 5,
  },
  lowerstr: {
    type: String,
    lowercase: true
  },
  upperstr: {
    type: String,
    uppercase: true
  },
  num: {
    type: Number,
    min: 6,
    max: 20
  },
  date: {
    type: Date,
    min: new Date(baseDateNum - 1000),
    max: new Date(baseDateNum + 2000)
  }
}));

const o = new Obj({
  // str: 'ccc'
  str: 'bbb',
  // qq: 'qq140'
  qq: '140000',
  lowerstr: 'AAAbbbb',
  upperstr: 'ccccDDD',
  num: 7,
  date: new Date(baseDateNum + 10000)
});
console.log(o);
const err = o.validateSync();

console.log(err);