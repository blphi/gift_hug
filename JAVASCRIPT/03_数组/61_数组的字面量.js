/* 
  创建一个数组

*/
var  arr = new Array()
arr[0] = 123
arr.hello = "abc"
console.log(arr.hello);
// 使用字面量来创建数组
/* 语法：[] */
var arr = []
console.log(typeof arr);
/* 
  使用字面量创建数组时，可以创建的同时指定数组中的元素

*/
var arr = [1,2,3,4,5,6,10]
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
// 使用构造函数创建数组时，也可以添加元素，将要添加的元素作为构造函数的参数传递，元素之间用,隔开
var arr2 = new Array(10,20,30)
console.log(arr2);
arr = [10]
// 创建一个长度为10的数组
arr2 = new Array(10)
console.log(arr2);
console.log(arr2.length);
// 数组中的元素可以是任意的数据类型，也可以是对象
// 也可以是一个函数，也可以是一个数组（二维数组）
arr = ["hello","1",2,true,undefined,null]
var obj = {name : "孙悟空"}
arr[arr.length] = obj
console.log(arr[6].name);