/* 
  将其他的数据类型转换为Number
      转换方式一：
          - 使用Number()函数
              - String => Number
                  1，如果是纯数字的 字符串，则直接将其转换为数字
                  2，如果字符串中有非数字的 内容，则转换为NaN
                  3，如果字符串是空串或者是一个全是空格的字符串，则转     换为0
              - boolean => Number
                  true => 1
                  false =>0
              - Null => Number    0
              - Undefined => Number NaN
      转换方式二：
          - 这种方式专门用来对付字符串
          - parseInt()  把一个字符串转换为一个整数
              parseInt()可以将一个字符串中的有效的整数内容取出来然后转换为Number
          - parseFloat() 把一个字符串转换为一个浮点数
              parseFloat()作用和parseInt()类似，不同的是它可以获得有效的小数





*/


var a = "12.85.67px"
// a = Number(a)
// a = parseInt(a)
a = parseFloat(a)


console.log("a = " + a)
console.log(typeof a)