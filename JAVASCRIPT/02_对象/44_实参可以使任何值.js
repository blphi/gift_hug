/* 
  定义个一个函数，判断一个数字是否是偶数，如果是偶数，则返回true,否则返回false
*/
function isOu(num) {
  /* if (num % 2 == 0) {
    return true
  } else {
    return false
  } */
  return num % 2 == 0
}
var res = isOu(89)
// console.log(res);
/* 
  定义一个函数，可以通过半径计算一个圆的面积，并返回结果
*/
function mianji(r) {
  return 3.13 * r * r
}
res = mianji(3)
// console.log(res);
/* 
  创建一个函数可以在控制台中输出一个人的信息
  可以输入的name age gender address
*/
function sayHello(o) {
  console.log("我是" + obj.name + ",我今年" + obj.age + ",岁了，我是一个" + obj.gender + ",我住在" + obj.address)
}
var obj = {
  name: "philiph",
  age: 33,
  gender: "男",
  address: "上海市青浦区崧泽大道9688号，紫光宏茂微电子有限公司，A栋203宿舍"
}
// sayHello(obj)
/* sayHello("philiph",33,"男人","上海市青浦区，崧泽大道9688号，紫光宏茂微电子有限公
司，A栋203宿舍") */

/* 
  实参可是一个对象，也可以使一个函数
*/
function fun(a){
  // console.log("a = "+ a);
  a(obj)
}
fun(sayHello)