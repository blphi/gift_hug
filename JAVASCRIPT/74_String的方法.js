/* 
  字符对象的相关操作

*/
// 在底层字符串是以字符数组的形式保存的
// console.log(str[6]);
// length  可以用来获取字符串的长度
// charAt()   返回字符串中指定位置的字符，根据索引获取指定的字符
// var res = str.charAt(6)
// console.log(str);
// console.log("res = "+res);
// charCodeAt()  返回字符串中的指定位置字符的unicode编码
// var code = str.charCodeAt("0")
// console.log(code);
// fromChartCode()  可以根据字符编码获取字符   
// var str2  = String.fromCharCode()
// console.log(str2);
// concat()   链接字符串,作用和+一样
// res = str.concat("你好","再见")
// console.log("res = "+ res);

/* 
  indexOf()
    - 该方法可以检索一个字符串中是否含有指定的内容
    - 如果字符串中含有该内容，则会返回其第一次出现的索引
    - 如果没有找到指定的内容，则返回-1
    - 可以指定一个第二个参数，指定开始查找的位置
*/
/* 
  lastIndexOf()
    - 该方法的作用和indexOf()一样
      不同的是indexOf()是从前往后找
      而lastIndexOf()是从后往前找
    - 也可以指定开始查找的位置
    - 如果没有找到，则返回-1
*/

// res = str.lastIndexOf("h")
// console.log(res);
var str = "中Hello Philiph"
/* 
  slice :
    - 截取字符串中指定的内容  含头不含尾
    - 不会影响原字符串，而是将截取的内容返回
    - 参数
        第一个：开始位置的索引，包含开始位置
        第二个：结束位置的索引，不包含结束位置
            - 如果省略第二个参数，则会截取到后边所有的
            - 也可以传递一个负数作为参数，负数的换将会从后边计算
*/

res = str.slice(4,-2)
console.log(res);
/* 
  substring()
    -可以用来截取一个字符串，可slice()类似
    -参数
      第一个：开始截取位置的索引，包含开始位置
      第二个：结束位置的索引，不包含结束位置
      不同的是
        substring方法不能接受负值作为参数，如果传递了一个负值，则默认为使用0，而且会自动调整参数的位置，如果第二个参数小于第一个，会自动交换
*/
res = str.substring(1,2)
console.log(res);

/* 
  substr()
    - 用来截取字符串
    - 参数
      第一个：开始位置的索引
      第二个：截取的长度
*/

res = str.substr(1,6)
console.log(res);


/* 
split
  - 可以将一个字符串拆分为一个数组
  - 参数
    - 需要一个字符串作为参数，将会根据字符串去拆分数组
    - 如果传递一个空串作为参数，则会将每个字符都拆分为数组中的一个元素

*/
str = "abcbcdefghij"
res = str.split("")
console.log(res);
/* 
  toUpperCase()
    - 将一个字符串转换为大写并返回
  toLowerCase()
    - 将一个字符串转换为小写并返回
*/

str = "abcedHUIzkdTOOFSD"
var res = str.toUpperCase()
console.log(res);