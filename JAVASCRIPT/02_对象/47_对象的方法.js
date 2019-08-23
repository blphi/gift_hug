/* 
  创建一个对象
*/
var obj = new Object()
// 向对象中添加属性
obj.name = "swk"
obj.age = 18
// 对象的属性值可以是任何的数据类型，也可以是个函数
obj.sayName = function () {
  console.log(obj.name);
}
// console.log(obj.sayName)
// obj.sayName()  调用对象的方法
/* 
  函数也可以成为对象的属性
    如果一个函数作为一个对象的属性保存
    那么我们称这个函数是这个对象的方法
    调用函数就是调用对象的方法（method）
    但是它只是名称上的区别，并没有其他的区别
*/
// fun()//调用函数
"hello".toString()
var obj2 = {
  name : "zbj",
  age : 18,
  sayName:function () {
    console.log(obj2.name);
  }
}
// obj2.sayName()
/* 
  枚举对象中的属性
*/


var obj3 = {
    name: "swk",
    age:18,
    gender:"男",
    address:"花果山"
}
/* 
  使用for in语句来枚举对象中的属性
  语法： 
      for(var 变量 in 对象){

      }
      for...in语句 对象中有几个属性，循环体就会执行几次
      每次执行会将对象中的一个属性的名字赋值给变量
*/
for (var n in obj3) {
    console.log(n+":"+obj3[n]);
  }
