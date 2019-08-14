/* 
  在JS中数据类型分为六种
    - String :字符串
    - Number ：数值
    - Boolean ：布尔值
    - Undefined ：未定义
    - Null ：空值
    - Object ： 对象
    其中String Number Boolean Undefined Null 属于基本数据类型
    Object属于引用数据类型
  
*/ 
/* 
    String 字符串
      - 在JS中字符串需要用引号引起来
      - 使用双引号或者单引号都可以,但是不要混着用
      - 引号不能嵌套，双引号中不能放双引号，单引号中不能放单引号
            - 在字符串中我们可以使用\作为转义字符
          当表示一些特殊符号时可以使用 \ 进行转义
            \"   表示双引号
            \'   表示单引号
            \n   表示换行
            \t   表示制表符


*/
var str = 'hello'
str1 = '我说："今天天气挺好啊~~~"';
str2 = "我说：\"今天天气真不错\"";
console.log(str1,str2)
// alert(str)