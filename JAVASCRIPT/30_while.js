/* 
  向页面中输出去连续的数字
*/
/* document.write(1+"<br/>")
document.write(2+"<br/>")
document.write(3+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(4+"<br/>")
document.write(5) */

/* 
  循环语句：
    通过循环语句可以反复的执行一段代码多次
  创建一个循环，往往需要三个步骤
  1.创建初始化变量 
  2.在循环中设置一个调教表达式
  3.定义一个更新表达式，每次更新初始化变量
  
  while循环：
    - 语法：
      while(条件表达式){
        语句。。。
      }
    - while语句在执行时
        先对条件表达式进行求值判断
          如果值为true，则执行循环体
          循环体执行完毕以后，继续对表达式进行判断
          如果为true，则继续执行循环体
          如果值为false则终止循环
  do...while循环
      - 语法：
        do{
          循环体。。
        }while(条件表达式)
      - 执行流程：
        do...while在语句执行时，会先执行循环体，
        循环体执行完毕以后，在对while的条件表达式进行判断
        如果值为true，则继续执行循环体
        如果值为false，则终止循环
  实际上while循环和do...while循环类似，不同的是：
        while循环是先判断段后执行
        do...while是先执行后判断
    do...while可以保证循环体至少执行一次，而while循环不行
*/
var  n =1
while (n<100) {
  // console.log(n++);
  document.write(n++ +"<br/>")
}
/* do{
  document.write(n++ + "<br/>")
}while(false) */
