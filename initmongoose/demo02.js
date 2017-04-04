var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

const objSchema = new mongoose.Schema({
  str: String,
  num: Number,
  bool: Boolean,
  arr: Array, // []
  arr2: [Date],
  arr3: [String],
  time: Date,

  buf: Buffer,

  mxo: mongoose.Schema.Types.Mixed, // {}
  oid: mongoose.Schema.Types.ObjectId
});

const Obj = mongoose.model("Obj", objSchema);

const o = new Obj({
  time: new Date(),
  arr3: [1234, "yes", new Date],
  buf: new Buffer([22,33,44]),
  oid: new mongoose.Types.ObjectId()
});

o.save(function(err){
  console.log(err);
});