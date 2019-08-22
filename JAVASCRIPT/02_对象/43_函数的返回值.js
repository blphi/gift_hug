/* 
  创建一个函数，用来计算三个数的和
  可以使用return 来设置函数的返回值
    语法：
      return 值
    return 后的值将会作为函数的执行结果返回
    可以定义一个变量来接受该结果
    在函数中return 后的语句都不会执行
    如果return 后不跟任何值或者 后面不写return则函数返回undefined
    return 后可以跟任意类型的值
*/
function sum(a,b,c){
  // console.log(a+b+c)
  var d = a + b + c
  // return d
  // return
  // alert("hello") //不会被执行，死代码
}
// 调用函数
var res = sum(1,2,3)
console.log(res);
res = alert("hello")