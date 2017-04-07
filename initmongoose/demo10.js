const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const User = mongoose.model('User', {
  name: {type: String, maxlength: 10}
});

User.remove({}).then(function(){
  // --------------- insertMany, 只要有一个数据对象校验失败就无法保存，但是一条语句一次执行，执行速度快
  // User.insertMany([{name:'alice'}, {name: 'baby'}])
  // .then(function(err){
  //   console.log(err);
  // })
  // .catch(err=>console.log(err));
  User.insertMany([{name: 'alice'}, {name: 'baby1'}, {name: 'baby2'}, {name: 'baby33'}, {name: 'babybaby'}])
  .then(function(arr){
    // arr[0].remove(function(err, obj){
    //   console.log(err, obj);
    // });

    // arr[0].remove().then(obj => console.log(obj))
    // .catch(err => console.log(err));

    // arr[0].remove()
    // .then(obj => User.create({name: obj.name + ' --- reborn'}))
    // .catch(err => console.log(err));

    // User.remove({name: 'baby'}).then(r => console.log(r));

    // 批量删除
    // User.remove({name: /^baby\d*$/}).then(r => console.log(r));

    // 更新, update如需验证runValidators: true, 加catch监控拦截的信息
    // console.log('update arr[0].name ===> ', arr[0].name);
    // arr[0].update({name: '111babyaaaaa'}, {runValidators: true}).then(function(err, result) {
    //   console.log(err, result); // {ok: 1, nModified: 1, n: 1}
    // }).catch(err => console.log(err));

    // 批量更改, 默认更改第一个符合条件的对象，如需更改多个数据加参数multi:true
    User.update({}, {name: 'haha'}, {multi: true}, function(err, result){
      console.log(err, result);
    });
  })
  .catch(err => console.log(err));

  // --------------- create, 校验成功的数据对象可以保存
  // User.create({name: 'alice'}, {name: 'babybaby'})
  // .then(function(u1, u2){
  //   console.log(u1, u2);
  // })
  // .catch(err=>console.log(err));

  // --------------- save
  // const user = new User({name: 'alicebaby'});
  // const promise = user.save(); // promise javascript
  // promise
  // .then(u => console.log(u))
  // .catch(err => console.log(err));

  // user.save(function(err, u) {
  //   console.log(err, u);
  // });
});


