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
