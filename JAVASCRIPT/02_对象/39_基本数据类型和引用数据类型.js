/* 
  基本数据类型
    String Number Boolean Null Undefined


    引用数据类型
      Object

      JS中的变量都是保存到栈内存中的
        - 基本数据类型的值直接在栈内存中存储
          值与值之间是独立存在的，修改一个变量不会影响其他的变量
        - 对象时保存到堆内存中的
          每创建一个新的对象，就会在堆内存中开辟出一个新的空间，而变量保存的是对象的内存地址（对象的引用），如果两个变量保存的是同一个对象的引用时，如果一个变量通过一个变量改变属性时，另一个变量的属性也会改变
*/
var  a = 123
var b = a 
a++
/* console.log("a = " + a);
console.log("b = " + b);
 */
var obj = new Object()
obj.name = "sunwukong"
var obj2 = obj
//修改obj 的name属性
obj.name = "zhubajie"
/* console.log(obj.name);
console.log(obj2.name); */
//设置 obj2 为null
obj2 = null
/* console.log(obj);
console.log(obj2); */
var c = 10
var d = 10
console.log(c==d);
var obj3 = new Object()
var obj4 = new Object()
obj3.name = "zhubajie"
obj4.name = "zhubajie"
/* 
  当我们比较两个基本数据类型的值时，比较的就是值
  当比较两个引用数据类型的值时，比较的就是对象的内存地址，如果两个对象时一模一样的，但是地址不同，它也会返回false
  
*/
console.log(obj3 == obj4)