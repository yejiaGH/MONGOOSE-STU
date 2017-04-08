var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Topic = mongoose.model('Topic', new mongoose.Schema({
  title: {type: String, required: true},
  body: {type: String, required: true},
  money: {type: Number, default: 0.5},
  accessNum: {type: Number, default: 16},
  createTime: Date,
  updateTime: Date
}));

Topic.remove({}, function() {
  const date = new Date;
  var topic = new Topic({
    title: 'tt',
    body: 'content',
    createTime: date,
    updateTime: date,
  });

  topic.save(function(err, result){
    // $inc 加法处理, $mul 乘法处理, $min >min 取min, $max <max 取max
    Topic.update({}, {
      title: 'title js',
      // $max: {accessNum: 10},
      // $min: {accessNum: 15},
      // $mul: {money: 3},
      // $inc: {accessNum: 2},
      $currentDate: {
        updateTime: true
      }
    }, 
      function(err) {

    });
  });
})

