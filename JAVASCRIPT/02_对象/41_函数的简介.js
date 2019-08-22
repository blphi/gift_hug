/* 
  函数：
    - 函数也是一个对象
    - 函数中可以封装一些功能（代码），在我们需要是可以执行这些功能（代码）
      - 使用typeof检查一个函数对象时，会返回function
*/
// 创建一个函数对象
// 可以将要封装的代码以字符创的形式传递给构造函数
/* var fun = new Function("console.log('Hello ,这是我的第一个函数~~')")
 */
// console.log(typeof fun);
// 封装到函数中的代码不会立即执行
// 函数中的代码会在函数调用的时候执行
// 调用函数语法：函数对象()
// 当调用函数时，函数中封装的代码会按照顺序执行
/* fun()
fun()
fun()
 */
/* 
  使用函数声明来创建一个函数
    语法： 
      function 函数名([形参1,形参2，...形参N]){
          语句。。。函数体
      }
*/
function fun2(){
    console.log("这是我的第二个函数~~");
    document.write("呜呜呜~~")
    alert("哈哈哈~~~")
}
// console.log(fun2);
// fun2()
/* 
  使用函数表达式来创建一个函数
  语法:
    var 函数名 = function ([形参1,形参2,...形参N]){
      函数体
    }
*/
var fun3 = function(){
  console.log("我是匿名函数中封装的代码");
}
console.log(fun3);
fun3()