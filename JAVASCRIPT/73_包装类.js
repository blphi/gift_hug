/* 
  基本数据类型：
    String Number Boolean Null  Undefined
  引用数据类型
    Object

  在JS中为我们提供了三个包装类，通过这三个包装类可以将基本数据类型转换为对象
  String()
    - 可以将基本数据类型的字符串，转换为String对象
  Number()
    - 可以将基本数据类型的数字转换为Number对象
  Boolean()
    - 可以将基本数据类型的布尔值转换为Boolean对象
  但是注意我们在实际应用中不会使用基本数据类型的对象
    如果使用基本数据类型的对象，在做一些比较时可能会得到一些不可预期的结果
*/
// var num = 3
var num = new Number(3)
var str = new String("hello")
// console.log(num);
// console.log(str);
// console.log(bool);

// console.log(typeof bool);

num.hello = "abced"
// console.log(num.hello);
var a = 3
a.hello = "你好"
// console.log(a.hello);
// 方法和属性只能添加给对象，不能添加给基本数据类型
// 当我们对一些基本数据类型的值去调用属性和方法时
//  浏览器会临时使用包装类将其转换为对象，然后在调用对象的属性和方法
//  在调用完毕后，在将其转换为基本数据类型
var s = 3
s = s.toString()  //先通过包装类转换为对象，在调用对象的toString方法
console.log(s);