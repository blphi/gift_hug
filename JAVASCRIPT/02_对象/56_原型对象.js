/* 
    原型：prototype
    我们所创建的每一个函数，我们的解析器都会向函数中添加一个属性prototype，这个属性对应着一个对象，这个对象就是我们所谓的原型对象
    如果函数作为普通函数调用则prototype没有任何作用
    当函数通过构造函数调用时，它所创建的对象中都会有一个隐含的属性，指向该构造函数的原型对象，我们可以通过__proto__来访问该属性
    原型对象相当于一个公共的区域，所有同一个类的实例，都可以访问到这个原型对象
    我们可以将对|象中共有的内容统一设置到原型对象中
    当我们访问对象的属性或者方法时，会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用
    以后我们创建构造函数时，我们可以将这些函数共有的属性和方法统一添加到构造函数中
    这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了
*/
function Person() {
  
}
function MyClass() {
  
}
//向MyClass 的原型对象中添加属性a
MyClass.prototype.a = 123
// 向MyClass的原型中添加一个方法
MyClass.prototype.sayHello = function () {
  console.log("Hello");
}
// console.log(Person.prototype);
// console.log(myClass.prototype);
// console.log(Person.prototype == myClass.prototype);
var mc = new MyClass()
var mc2 = new  MyClass()
mc.a = "我是mc中的a"
// console.log(mc.__proto__ == MyClass.prototype);
// console.log(mc.__proto__ == mc2.__proto__);
// console.log(mc.a);
// console.log(mc2.a);
// console.log("a" in mc)
mc.sayHello()