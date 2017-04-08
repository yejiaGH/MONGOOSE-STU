var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const T = mongoose.model('Topic', {
  arr: []
});

T.remove({}, function(){
  T.create({arr: [11,22,33,44,55, 55]}).then(function(){
    // $pop 1:从最后删除一条, -1:从头删除一条
    // T.update({}, {$pop: {arr:-1}}).exec(); // Promise ->then and Query

    // $addToSet，加入非重复的数据
    // T.update({}, {$addToSet: {arr:[66, 77]}}).exec(); // [66,77]
    // T.update({}, {$addToSet: {arr:{$each: [77, 77, 66]}}}).exec(); // 66, 77, 加入的元素不能重复

    // 删除指定的数据，非数组, $pull/$pullAll
    // T.update({}, {$pull: {arr: 55}}).exec();
    // 删除多个值
    // T.update({}, {$pullAll: {arr:[55,33]}}).exec();

    // $push, 添加指定位置的数据
    // T.update({}, {$push:{arr: {$each: [66,77,88]}}}).exec(); // 加在数组之后
    // T.update({}, {$push:{arr: {$each: [66,77,88], $position: 3}}}).exec(); // 在指定位置添加
    T.update({}, {$push:{arr: {$each: [66,77,88], $position: 3, $slice: -3}}}).exec(); // slice 不可以区间切片
  });
});