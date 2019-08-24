/* 
  创建一个构造函数
*/
function MyClass() {
  
}
// 向MyClass的原型中添加一个name属性
MyClass.prototype.name = "我是原型中的名字"
var mc = new MyClass()
// console.log(mc.name);
// 使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true
console.log("name" in mc);  //true
// 可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性
// 使用该方法只有当对象自身中含有属性时，才会返回true
console.log(mc.hasOwnProperty("name"))
console.log(mc.__proto__.hasOwnProperty("hasOwnProperty"))
/* 
  原型对象也是对象，所以它也有原型
    当我们使用一个对象的属性和方法时，会先在自身中寻找，
      自身中如果有，则直接使用，
      如果没有则去原型对象中中寻找，如果原型对象中有，则使用
      如果没有则去原型的原型中寻找，直到找到Object构造函数的的原型
      Object函数对象的原型没有原型（为null），如果Object函数对象的原型中依然没有找到，则返回undefined
      
*/
console.log(mc.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));
console.log(mc.__proto__.__proto__);
console.log(Object.prototype);
