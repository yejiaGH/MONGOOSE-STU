所有类型都具有配置

强制不得为空（验证器）
  required : true

设置属性默认值
  defualt: "qq140"

是否包括在查询结果中
  select: false

getter和setter拦截器
  get: v=>v
  set: v=>v
===========================
对字符串属性值的验证和转换
验证器
枚举
  enum: Array
正则表达式验证
  match
限制字符串最大和最小长度
  maxlength & minlength
字母大小写转化
  lowercase & uppercase
去除字符串前后空白字符
  trim: true/false
===========================
自定义验证器
validate: {validator: Function}
Class.schema.path(xxx).validate(fn)
validator(v, [callback])同步验证器，加入第二个参数callback变为异步验证器
===========================
获取错误信息
doc.validate(error=>error) 异步获得错误信息
error = doc.validateSync() 获得同步错误信息
doc.save(error => error) 回调获得错误信息
promise = doc.save() promise方式获得错误信息
Model.update(query, update, {runValidators: true}, callback)
===========================
错误信息
err.errors 错误集合
err.errors.qq 得到qq属性值的错误信息
{path, value, message} = err.rerrors.qq
===========================
自定义错误信息
自定义内置验证器的错误信息
自定义验证器的错误信息
===========================
加入方法
加入实例方法 schema.methods.xxx
加入静态方法 schema.statics.xxx
加入虚拟 setter/getter 方法
  virtual('xxx').get(handle)
  virtual('xxx').set(handle(value))
===========================
对象的增删改
obj.save/Clss.create/Class.insertMany
obj.remove/Class.remove
obj.update/Class.update
===========================
字段更改参数
$inc 加法运算
$mul 乘法运算
$min / $max 数值和日期的限定
$currentDate 设定当前日期
===========================
数组类型字段的更改参数
$更改数组中指定的值
$pop删除一条数据
$addToSet 加入不重复数据
$pull/$pullAll清除
$push 加入数据
===========================
对象的基础查询
find(conditions, [projection], [options], [callback])
findById
findByIdAndRemove / findByIdAndUpdate
findOne
findOneAndRemove / findOneAndUpdate
===========================
比较式查询
大小判断
  $gt 大于
  $gte 大于等于
  $lt 小于
  $lte 小于等于

$ne 不是
$in 包含
$nin 不包含
