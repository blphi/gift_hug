/* 

*/

var obj = {
  name:"swk",
  age : 18,
  gender: "男",
  sayName:function () {
    console.log(this.name);
  }
}
var obj2 = {
  name:"shs",
  age : 18,
  gender: "男",
  sayName:function () {
    console.log(this.name);
  }
}
var obj3 = {
  name:"zbj",
  age : 18,
  gender: "男",
  sayName:function () {
    console.log(this.name);
  }
}
// obj3.sayName()
/* 
    使用工厂函数创建对象
    通过这个方法可以大批量的创建对象
*/
function createPerson(name,age,gender) {
  //创建一个新的对象
  var obj = new Object()
  //向对象中添加属性
  obj.name = name
  obj.age = age
  obj.gender = gender
  obj.sayName = function () {
    console.log(this.name);
  }
  return obj
}
var  obj2 = createPerson("swk",18,"男")
var  obj3 = createPerson("zbj",30,"男")
var  obj4 = createPerson("zzj",13,"女")
// console.log(obj2,obj3,obj4);
obj4.sayName()
obj3.sayName()