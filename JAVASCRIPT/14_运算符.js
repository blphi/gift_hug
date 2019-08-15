/* 
    运算符也叫操作符
      通过运算符可以对一个或者多个值进行运算
      比如： typeof 就是运算符，可以来获得一个值的类型,它会将该值的类型以字符串的形式返回
        number, string , boolean ,undefined , object

      - 算数运算符
          - 当对非number 的值进行运算时，都会转换为       number类型的值，在进行运算
          - 任何值和NaN进行运算，最后结构都是NaN
          -
              +  - 可以对两个值进行加法运算，将结果返回
                 - 如果对两个字符串进行加法运算，则会进    行拼串操作
                 - 任何值和字符串进行加法运算都会将任何    值转换为字符串后进行拼串操作
                      - 可以利用这一特点来将任何数据类型来进行隐式数据类型转换 ，实际上也是调用的String()函数
                       ""(空串)+任何数据类型
              —  - 可以对两个值进行减法运算
              *  - 可以对两个值进行乘法运算
              /  - 可以对两个值进行除法运算
            任何值做 - * / 运算时都会自动转换为Number 在进行运算,可以通过这个特点来进行任何隐式转换为 Number的转换  
              任意数据 - 0
              任意数据 * 1
              任意数据 / 1
            原理和Number()类似
            %  取模运算   取余数

*/

var a = 132
a + 1
var result = typeof a 
result  = a +1
a = a + 1
result = 34234+4343
result = true + null
result = "123" + "2323"
result = "锄禾日当午 ，" +
          "汗滴禾下土，" +
          "谁知盘中餐，" +
          "粒粒皆辛苦."
result = null
result = result + ""
result = 1 + 2 + "3"  // 33
result = "3" + 1 + 2  // "312"
result = 100 - "1"  //99
result = 2 * undefined   //NaN
result = 2 * null   // 0
result = 2/4  //0.5
result = "123"
result = result - 0  // 123
result = 9 % 4
result = 9 % 5
result = 9 % 2
result = 9 % 3

console.log("result = " + result);
console.log(typeof result);
// console.log("a = " + a );

