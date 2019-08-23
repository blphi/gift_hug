/* 
  作用域
    - 作用域指一个变量的作用范围  
    - 在JS中一共有两种作用域
        - 全局作用域
            - 直接编写在script标签中的JS代码，都在全局作用域中
            - 全局作用域在页面打开时创建，在页面关闭时销毁
            - 在全局作用域中，有一个全局对象window，我们可以直接使用，代表的是一个浏览器的窗口，由浏览器创建，可以直接在浏览器中使用
            - 在全局作用域中：
                创建的变量都会作为window对象的属性保存
                创建的函数都会作为window的方法保存
            - 全局作用域中的变量都是全局变量
              在页面的任意的部分都可以访问到
        - 函数作用局（局部作用域）
*/
// console.log(window);
// var a = 10 
// console.log(window.a);
var b = 20 
var c = "hello"
// console.log(window.c);
function fun() {
  console.log("我是fun函数")
}
// window.fun()
// window.alert("hello")
/* 
  变量的声明提前
    - 我们使用var关键字声明的变量会在所有代码执行之前被声明
        但是如果声明变量时不使用var 关键字，则变量不会声明提前
*/
// console.log("a = "+ a);
var a = 123
/* 
  函数的声明提前：
      使用函数声明形式创建的函数function(){}
        它会在所有的代码执行之前就被创建，所以我们可以函数声明之前就调用它
      使用函数表达式形式创建的函数不会被声明提前，所以不能再声明前调用


*/

fun()
fun2()
function fun() {
  console.log("我是一个fun函数");
}// 函数声明形式创建函数，会声明提前
var fun2 = function () {
  console.log("我是fun2函数");
}//函数表达式形式创建函数，不会声明提前
