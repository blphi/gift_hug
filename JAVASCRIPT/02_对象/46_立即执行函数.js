/* 
  函数对象()
  匿名函数自调用 ： 立即执行函数
  函数定义完后立即被调用，这种函数叫做立即执行函数，这种函数往往只会执行一次
*/
/* (function () {
  console.log("我是一个匿名函数");
})() */
// fun()
(function (a,b) {
  console.log("a = "+ a);
  console.log("b = "+b);
})(123,345)
