/* 
  创建一个Person构造函数
    - 在Person构造函数中，为每一个对象都添加了一个sayName方法
      目前我们的方法时在构造函数内部创建的，也就是我们的构造函数每执行一次，就会创建一个新的sayName方法
      也就是我们所有实例的sayName方法都是唯一的
      这样就导致了构造函数每执行一次就会创建一个新的方法，执行一万次就会创建一万个新的方法，而这一万个方法是一模一样的，这是完全没有不要的，完全可以使所有的对象共享同一个方法
*/
function Person(name,age,gender) {
  this.name = name
  this.age = age
  this.gender = gender
  this.sayName = fun
}
// 创建一个Person实例
var per = new Person("Philiph",33,"男")
var per1 = new Person("Lilei",23,"男")
per.sayName()
per1.sayName()
console.log(per.sayName == per1.sayName);
//将sayName方法定义在全局作用域中、
function fun() {
  console.log("Hello大家好，我是"+this.name);
}