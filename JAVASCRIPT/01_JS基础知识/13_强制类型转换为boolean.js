/* 
      将其他的数据类型转换为Boolean
          - 使用Boolean()函数
                Number  => Boolean
                  - 除了 0 和 NaN为 false  其他都为true
                String  => Boolean
                  - 除了空串为false 外，其他都为true  空格也是转为 true
                null => Boolean    false
                undefined=>Boolean  false
                对象也会转换为true


*/

var a = " "
a = Boolean(a)

console.log(a);
console.log(typeof a);


