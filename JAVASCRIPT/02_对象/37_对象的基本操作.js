/* 
  使用new关键字调用的函数，是构造函数constructor
  构造函数是专门用来创建对象的函数
  使用typeof检查对象时，会返回字符创object
*/
// 创建对象
var obj = new Object()
// console.log(typeof(obj));
// 向对象中添加属性
  /**
   * 语法：对象.属性名 = 属性值
   */
  obj.name = "sunwukong"
  obj.gender = "male"
  obj.age = 18
  // console.log(obj)
  //读取对象的属性
  /**
   * 语法：对象.属性名
   * 如果读取对象中没有的属性名，不会报错，而是会返回undefined
   */
  // console.log(obj.hello)
  // 修改对象的属性
  /**
   * 对象.属性名 = 新值
   */
  obj.name = "tom"
  // console.log(obj.name);
  // 删除对象的属性
  /**
   * delete 对象.属性名
   */
  delete obj.gender
  obj.gender = "男"
  console.log(obj);