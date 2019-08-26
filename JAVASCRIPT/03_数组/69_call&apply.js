/* 
  函数的方法：
    call和apply

*/

function fun(a,b) {
  console.log("我是fun函数");
  console.log(this);
  console.log("a =" + a);
  console.log("b =" + b);
}
/* 
  call()和apply()
    - 这两个方法都是函数对象的方法，需要通过函数对象来调用
    - 当对函数调用call()和apply()都会调用函数执行
    - 在调用call()和apply()时可以将一个对象指定为第一个参数
      此时这个对象将会成为函数执行的this
    - call()方法可以将实参在对象之后依次传递
    - apply()方法需要将实参在对象之后将实参封装到一个数组中统一传递
    - this的情况
        1，函数形式调用：window
        2,以方法形式调用：调用方法的对象
        3,以构造函数的形式调用:this是新创建的对象
        4,使用call和apply时，this是指定的对象

*/
var obj = {
  name:"obj",
  sayName:function () {
    console.log(this.name);
  }
}
var obj2 = {
  name:"obj2"
} 
// fun()
// fun.call(obj)
// obj.sayName.apply(obj2)
fun.call(obj,1,2)
fun.apply(obj,[1,2])