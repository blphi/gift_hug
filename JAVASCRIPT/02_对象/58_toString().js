/* 
  当我们直接在页面中打印一个对象时，实际上输出的是对象的toString()方法的返回值
  如果我们希望在输出对象时，不输出[object Object]，可以为对象添加一个toString的方法
  toString()
*/
function Person(name,age,gender) {
  this.name = name
  this.age = age
  this.gender = gender

}

var per = new Person("孙悟空",18,"男")
var per2 = new Person("猪八戒",19,"男")
Person.prototype.toString = function () {
  return "Person [ name = "+ this.name + ", age = " + this.age+ ", gender = "+this.gender +"]"
}
var res = per.toString()
var res2 = per2.toString()
console.log("res = "+ res);
console.log("res2 = "+ res2);
// console.log(per.hasOwnProperty("toString"));
// console.log(per.__proto__.__proto__.hasOwnProperty("toString"));