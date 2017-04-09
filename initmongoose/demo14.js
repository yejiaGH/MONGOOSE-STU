var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const T = mongoose.model('Topic', {
  // arr: []
  obj: {}
});

function generatorArr(size) {
  let arr = [];
  for (let i=0; i<size; i++) {
    arr.push({
      name: 'alice' + i,
      num: i
    });
  }
  return arr;
}

T.remove({}, function(){
  T.create([
    // {arr: [11, 22, 33]},
    // {arr: [33, 44,55]},
    // {arr: [55, 66, 77, 88]}

    // {arr: generatorArr(5)},
    // {arr: generatorArr(10)},
    // {arr: generatorArr(15)},

    {obj: {name:'java', num: 11}},{obj: {name:'javascript', num:12}},{obj: {name:'node.js'}}
  ]).then(function(){
    // T.find({arr: {$all: [33, 44]}}).then(function(result){
    //   console.log(result);
    // });

    // T.find({arr: {$elemMatch:{name: 'alice9'}}}).then(function(result){
    //   console.log(result);
    // });

    // T.find({arr: {$size: 5}}).then(function(result){
    //   console.log(result);
    // });

    // T.find({$where: "this.obj.name === 'java'"}).then(function(result){
    //   console.log(result);
    // });

    T.find({
      $where: function(){
        // return this.obj.name === 'javascript';
        return /^java\w*$/.test(this.obj.name) && this.obj.num === 12;
      }
    }).then(function(result){
      console.log(result);
    });
  });
});