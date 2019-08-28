/* 
  量词：
    - 通过量词可以设置一个内容出现的次数
    - 量词只对它前边的一个内容起作用
    - {n}  正好出现n次
    - {m,n}   出现m-n次
    - {m,}    出现m次之上
    - n+     至少一个  {1，}
    - n*     0个或者多个  {0，}
    - n?      0个或者1个  {0,1}
    - ^a     以a开头
    - a$     以a结尾
*/

var reg = /a{3}/  //aaa
reg = /(ab){3}/   //ababab
reg = /ab{3}c/    // abbbc
reg = /ab{1,3}c/
reg = /ab+c/   
reg = /ab*c/   
reg = /ab?c/   
reg = /^a/
reg = /a$/i
reg = /^a|a$/
// console.log(reg.test("aaaaa"));
//创建一个正则表达式检查是否是一个合法的手机号
/* 
  手机号的规则：
    17717805936
    1,   1开头
    2，   第二位不能是1,2,0，只能是【3-9】任意数字
    3，三位以后任意数字9个

    ^1[3-9][0-9]{9}$
*/
var phoneStr = "17717805936"
var phoneReg = /^1[3-9][0-9]{9}$/
  console.log(phoneReg.test(phoneStr));