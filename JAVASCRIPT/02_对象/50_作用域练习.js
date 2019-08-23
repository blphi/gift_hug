/* 
  作用域练习
*/
var a = 123
function fun() {
  console.log("a = "+ a);
}
fun() //123

//============================

var b = 123
function fun2() {
  console.log("b = "+b);
  var b = 456
}
fun2() //undefined
console.log("b = "+b); //123
// ================

var c = 123
function fun3() {
  console.log("c = "+ c);
  c = 456
}
fun3()  //123
console.log("c = "+c); //456 

//================================

var d = 123
function fun4(d) {
  console.log("d = "+ d);
  d =456
}
fun4()  //undefined
console.log("d= "+ d); //123


// ======================================

var e =123
function fun5(e) {
  console.log("e = "+ e);
  e = 456
}
fun5(123)  //123
console.log("e = "+ e);  //123
