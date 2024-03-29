/* 
  正则表达式
    - 用于定义一些字符串的规则
      计算机可以根据正则表达式，来检查一个字符串是否符合规则，或者将字符串中符合规则的内容提取出来
    
*/

// 创建正则表达式的对象
/* 
  语法：  
  var 变量 = new RegExp("正则表达式","匹配模式")
  使用typeof检查正则对象，会返回Object
  var reg = new RegExp("a")这个正则表达式可以检查一个字符串中是否含有a
  在构造函数中可以传递一个匹配模式作为第二个参数
  可以使：
    i:  忽略大小写
    g:  全局匹配模式
*/
/* 
  这个正则表达式用来检查字符串中是否包含a
*/
var reg = new RegExp("aB")
// console.log(reg);
// console.log(typeof reg);
var str  = "abcdere"
/* 
  正则表达式的方法：
    test()
      - 使用这个方法可以用来检查一个字符串是否符合正则表达式规则,如果符合规则，则返回true，否则返回false
      
*/
var res = reg.test(str)
console.log(reg.test("bcAB1bc"));