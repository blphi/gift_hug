/* 
    
 */
function fun(params) {
  console.log("函数要执行了");
  for(var i = 0 ;i<5;i++){
    if (i==2) {
      return // 退出当前函数
      break  // 退出当前循环
      continue // 退出当次循环
    }
    console.log(i)
  }
  console.log("函数执行完了");
}
// fun()
/* 
  返回值可以是任意的数据类型，也可以是一个对象
    也可以是一个对象
*/
function fun2() {
  return {name:"shs"} //返回一个对象
}
var a = fun2()
// console.log("a = "+ a);
function fun3() {
  function fun4() {
    console.log("我是fun4");
  }
  return fun4
}
/* 
  将fun4函数对象作为返回值返回
*/
a = fun3()
// console.log("a = "+ a )
// a()
fun3()()
