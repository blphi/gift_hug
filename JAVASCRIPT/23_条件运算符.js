/* 
  条件运算符也叫三元运算符
    语法：
        条件表达式 ? 语句1  : 语句2
        执行流程
          条件运算符在执行时，首先对条件表达式进行求值，如果该值为true，则执行语句1，并返回执行结果；如果该值为false，则执行语句2,并返回执行结果
*/

false ? console.log("语句1"): console.log("语句2");
var a = 40,b = 20,c = 50
a > b ? console.log("a大") : console.log("b大");
;

//获取 a 和 b 中的 最大值

// var max = a > b ? a : b
// max = max > c ? max : c
// console.log("max = " + max );
// 这种写法不推荐使用，但是不方便阅读
var max  = a > b ?( a > c ? a :c ) : ( b > c ?  b : c)
console.log("max = " + max);
" "? console.log('1') : console.log("2");
;




