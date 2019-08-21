/* 
  强制类型转换
      - 指将一个数据类型强制转换为其他的数据类型
      - 类型转换主要指，将其他的数据类型转换为
          String Number Boolean      
*/

/* 
    将其他的数据类型转换为String
      - 方式一：
        - 调用被转换数据类型的toString()方法
        - 该方法不会影响原变量，它会将转换的结果返回
        - 但是要注意null 和 undefined 这两个值没有toString()方法，
          如果调用他们的方法会报错
      - 方式二：
        - 调用函数String()函数，并将被转换的数据作为参数传递给函数
        - 使用String()函数做强制类型转换时，
            对于Number 和 Boolean 实际上就是调用toString()方法
            对于 Undefined 和 Null 就不会调用toString()方法
              它会将null 直接转换为字符串 "null"
              它会将undefined 直接转换为字符串 "undefined"
        


*/

//方式一：
var a = 123 

// 调用 a 的 toString()方法
a = a.toString()

console.log("a = "+a)
console.log(typeof a)


// 方式二：
var a = undefined

a = String(a)

console.log("a = "+ a)
console.log(typeof a)