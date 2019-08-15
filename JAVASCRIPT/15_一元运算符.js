/* 
  一元运算符：只需要一个操作数
    +  正号  不会对数字产生任何影响
    -  负号  负号可以对数字进行负号取反

    对于非Number类型的值，会先转换为Number，在进行运算
    可以对一个其他类型的数据使用+ 来进行隐式转换为Number
*/
var  a = true
a = NaN
a = undefined
a = null
a = {}


// a = -a
a = +a
var result = 1 + +"2" + 3


console.log("a = " + a);
console.log(typeof a)
console.log("result = " + result);
console.log(typeof result);


