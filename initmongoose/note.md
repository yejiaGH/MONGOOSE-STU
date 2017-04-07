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
