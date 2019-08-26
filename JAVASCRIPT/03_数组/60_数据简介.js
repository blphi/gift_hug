/* 
  对象：内建对象：array
        宿主对象
        自定义对象


*/
/* 
  Array : 数组
    也是一个对象
    和普通的对象的功能类似，用来存储一些数据的
    不同的是普通的对象是使用字符串来作为属性名的
    数组是使用数字索引来操作元素
    索引（index）：从0开始的整数
    数组的存储性能比普通对象要好，在开发中经常使用数组来存储一些数据

*/
var obj = new Object()
obj.name = "sunwukong"
// console.log(obj.name);
/* 
  创建数据对象
*/
var arr = new Array();
// 使用typeof检查一个数组时会返回Object
console.log(typeof arr);
/* 
  向数组中添加元素
  语法：数组[索引] = 值
  读取数组中的元素
  语法：数组[索引]
    如果读取不存在的索引，他不会报错，而是返回undefined
*/
arr[0] = 10
arr[1] = 20
arr[5] = 50
console.log(arr[6]);
/* 
  获取数组的长度
  可以使用length属性来获取数组的长度
  对于连续的数组，使用length可以获得数组的长度，也就是元素的个数
  对于不连续的数组，使用length可以获得数组的最大索引+1

*/
/* 
  向数组的最后一个位置添加元素
  数组[数组.length] = 值
*/
arr[arr.length] = 10
arr[arr.length] = 10
arr[arr.length] = 10

console.log(arr);