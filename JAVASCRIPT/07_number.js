/* 
    在JS中所有的数值都是Number类型
      包括整数和浮点数（小数）
      可以使用一个运算符 typeof 来检查一个变量的类型
        语法：typeof 变量
        当检查字符串时，返回string,检查Number时，返回number
*/
var a = 123
a = 568
a = "123"
var b = 123
console.log(a)
console.log(typeof a)
console.log(b)
console.log(typeof b)
console.log(Number.MAX_VALUE)   //JS中能够表示的数字的最大值
console.log(Number.MIN_VALUE)    // 表示的是大于0的最小的正值
console.log(Number.MAX_VALUE*Number.MAX_VALUE)  //如果数值超过了最大值，则用Infinity 表示的是无穷
var c = Infinity
console.log(c)
console.log(typeof c)  // Infinity 使用typeof检查，的数据类型也是number
a = "abc" * "bcd"
console.log(a)   //NaN   not a number   
console.log(typeof a) // 使用typeof 检查NaN 也是number
/* 
  number 的计算
    在JS中整数的运算基本可以保证精确
    如果使用JS进行小数或者浮点数的计算，可能得到一个不精确的结果，所以千万不要使用JS进行对精确度要求比较高的运算
*/
var d =  0.01 +0.2
console.log(d)
