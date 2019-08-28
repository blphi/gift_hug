/* 
    使用字面量来创建正则表达式
      语法：
          var 变量名 = /正则表达式/匹配模式
    使用字面量的方式来创建更加简单
    使用构造函数的方式创建更加灵活
*/

var reg = new RegExp("a","i")
reg = /a/i
// console.log(typeof reg);
// console.log(reg.test("bc"));
// 创建一个正则表达式来检查一个字符串中是否含有a或b
// 语法：使用|表示或者的意思
reg = /a|b|c/
// 创建一个正则表达式来检查一个字符串中是否有字母
/* 
    []里的内容是或的关系
    [ab]  《=》  a|b   reg = [ab]  =>  reg =[a|b]
    [a-z]    任意的小写字母  reg = /[a-z]/
    [A-Z]   任意的大写字母   reg = /[A-Z]/  
    [A-z]     任意的字母     reg = /[A-z]/
    [^ab]   除了ab     reg = [^ab]找除了a|b 之外的
    [^0-9]  除了数字
 */

reg = /a[bde]c/
reg = /[^ab]/
console.log(reg.test("a1"));