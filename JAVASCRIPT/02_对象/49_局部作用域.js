/* 
  函数作用域：局部作用域
    - 调用函数时创建函数作用域，函数执行完毕后函数作用域销毁
    - 每调用一次函数就会创建一个函数作用域，他们之间是相互独立的
    - 在函数作用域中，可以访问到全局作用域的变量，在全局作用域中无法访问到函数作用域的变量
    - 当在函数作用域中操作一个变量时，它会现在自身的作用域中寻找，如果有就直接使用，如果没有则向上一级作用域中去寻找,直到找到全局作用域，如果全局作用域中依然没有找到，则会报错
    - 在函数中药访问全局变量可以使用window对象
*/

/* function fun() {
  
} */
// fun()
var a = 10 
function fun() {
  var a = "我是函数中的变量a"
  var b = 20
  // console.log("a = "+ a );
  function fun2() {
    console.log("a = "+ window.a);
  }
  fun2()
}
// fun()
// console.log("b = " + b);
// console.log("a = " + a)
/* 
  在函数作用域中也有声明提前的特性
      使用var关键字声明的变量会在函数中所有代码执行之前声明
      函数声明也会在函数中所有的代码执行之前执行
*/
function fun3() {
  console.log(a);
  fun4()
  var a  = 35
  function fun4() {
    console.log("我是fun4");
  }
}
// fun3()
/* 
  在函数中不使用var关键字声明的变量都会成为全局变量
*/
var c = 33
function fun5() {
  console.log("c = "+ c);
  c = 10
}
// fun5()
// console.log("c = "+c);
// console.log(window.c);
/* 
  定义形参相当于在函数作用域中声明了一个变量
*/
var e = 23
function fun6(e) {
  console.log(e);
}
fun6()