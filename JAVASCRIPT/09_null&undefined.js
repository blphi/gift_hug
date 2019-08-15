/* 
  Null 类型的值只有一个  就是null
  null 这个值专门用来表示一个为空的对象
  使用typeof 检查一个null 值时，会返回object


  Undefined 类型的 值只有一个 就是undefined
  当声明一个变量，但是并没有给这个变量赋值时，它的值就是undefined
  使用typeof 检查 undefined 时，也会返回undefined
*/

var a = null
var b = undefined
console.log(a)
console.log(typeof a)
console.log(b)
console.log(typeof b)