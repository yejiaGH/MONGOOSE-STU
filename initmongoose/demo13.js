var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const T = mongoose.model('Topic', {
  name: {type: String, maxlength: 10}
});

const arr = [];
for(let i=1; i<50; i++) {
  arr.push({
    name: 'alice' + i
  })
}

T.remove({}, function(){
  T.create(arr).then(function(objs){
    let id = objs[0].id;
    // T.findById(id, function(err, t){
    //   console.log(t);
    // });

    // T.findByIdAndRemove(id, function(err, t){
    //   console.log(t);
    // });

    // T.findByIdAndUpdate(id, {name: 'alice1111111'}, {runValidators: true}, function(err, t){
    //   console.log(err, t);
    // });

    // return T.findByIdAndUpdate(id, {name: 'alice1111111'}, {runValidators: true})
    // .then(function(t){
    //   console.log(t);
    // })
    // .catch(err => console.log(err));

    // 返回哪一个不一定
    // T.findOne({name:/^alice1\d$/}, function(err, t){
    //   console.log(t);
    // }); 

    // 第二参数，去除或返回特定字段
    // T.find({name:/^alice1\d$/}, "name", {skip: 5}, function(err, t){
    //   console.log(t);
    // });

    // 去掉了前5个, skip + limit可以实现翻页功能
    // T.find({}, null, {skip: 5, limit: 7}, function(err, t){
    //   console.log(t);
    // });
    T.find({}, '-body', {skip: 5, limit: 7}, function(err, t){
      console.log(t);
    });
  }).catch(err => console.log(err));
});

