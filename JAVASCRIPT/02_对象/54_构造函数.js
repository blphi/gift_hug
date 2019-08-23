/* 
  使用工厂方法创建的对象使用的构造函数都是Object 
  所创建的对象都是Object这个类型
  就导致我们无法区分出多种不同类型的对象  
*/

function createDog(name,age) {
  var obj = new Object()
  obj.name = name
  obj.age = age 
  obj.sayHello = function () {
    console.log("hello");
  }
  return obj
}
var dog = createDog("旺财", 3)
// dog.sayHello()
// console.log(dog);
/* 
  构造函数：就是一个普通函数，创建方式和普通函数没有区别
    不同的是构造函数习惯上首字母要大写
    构造函数和普通函数的区别就是调用方式的不同
      普通函数时直接调用
      构造函数需要使用new关键字来调用
  构造函数的执行流程：
    - 立即创建一个新的对象
    - 将新建对象设置为函数中的this,在构造函数中可以通过this来引用   新建的对象
    - 逐行执行函数中的代码
    - 将新建对象作为返回值返回
*/
//创建一个构造函数，专门用来创建Person对象
function Person(name,age,gender) {
  // console.log(this);
  this.name = name
  this.age = age
  this.gender = gender
  this.sayName = function () {
    console.log(this.name);
  }
}
var per1 = new Person("skw",18,"男")
var per2 = new Person("zbj",30,"男")
var per3 = new Person("zzj",16,"女")
var per4 = new Person("ytj",18,"女")
// console.log(per1,per2,per3,per4);
function Dog(name,age) {
  this.name = name
  this.age = age 
  this.sayHello = function () {
    console.log("hello");
  }
}
var dog1 = new Dog("旺财",5)
// console.log(dog1)
/* 
  使用同一个构造函数创建的对象我们成为一类对象，也将一个构造函数成为一个类
  我们将通过一个构造函数创建的对象，称为是该类的实例
  类：构造函数就是类
  实例：通过构造函数创建的对象就是这个构造函数的实例
  使用instanceof 可以用来检查一个对象是否是一个类的实例
  语法：对象 instanceof 构造函数
  如果是返回true 如果不是 返回false
*/

// console.log(per1 instanceof Person);
// console.log(dog1 instanceof Person);
/* 
  所有对象都是Object的后代
    所以任何对象和Object在做instanceof检查时都会返回true
*/
console.log(per1 instanceof Object);
console.log(dog1 instanceof Object);
/* 
  this的总结：
    1，当以函数的形式调用时，this就是window
    2,当以方法的形式调用时 ，谁调用方法this就是谁
    3，当以构造函数的形式调用时，this就是新创建的对象
*/