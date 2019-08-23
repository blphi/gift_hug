/* 
  解析器在调用函数时，每次都会向函数内部传递进一个隐含的参数
  这个隐含的参数就是this
    this指向的是一个对象，这个对象我们成为函数执行上下文对象
    根据函数的调用方式的不同，this会指向不同的对象
      - 以函数的形式调用时，this永远都是window
      - 以方法的形式调用时，this就是调用方法的对象
*/
function fun(a,b) {
  console.log("a = "+ a , "b = "+ b);
  console.log(this);
}
// fun(1,2)  以函数形式调用，this是window
var obj = {
  name : "swk",
  sayName:fun
}
var obj2 ={
  name: "shs",
  sayName:fun
}
// console.log(obj.sayName == fun);
// obj.sayName() //以方法的形式调用，this是调用方法的对象
// obj2.sayName()  //以方法的形式调用，this是调用方法的对象


/* 

*/

var name = "全局"
function fun() {
  console.log(this);
  console.log(this.name);
}
var obj3 = {
  name:"swk",
  sayName:fun
}
var obj4 = {
  name:"shs",
  sayName:fun
}
// fun()
obj3.sayName()
obj4.sayName()
fun()