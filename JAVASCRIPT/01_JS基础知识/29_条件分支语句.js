/* 
  条件分支语句也叫switch 语句
  switch 语句语法：
      switch(条件表达式){
          case 表达式：
              语句。。。
              break;
          case 表达式
              语句。。。
              break;
              .
              .
              .
          case 表达式
              语句。。。
              break
          default
      }
  执行流程：
        switch ... case 语句
        在执行时会一次将case 后的表达式的值和switch后的条件表达式的值进行全等比较
        如果比较结果为true，则从 当前case出开始执行代码
          当前case后的 所有的代码都会执行，我们可以再case的后边跟一个break关键字，这样可以确保只会执行当前case的语句，而不会执行其他的case
        如果比较结果为false，则继续向下比较
        如果所有的比较结果都为false，则只执行default后的语句
  switch 语句和if语句的功能实际上有重复，使用switch可以实现if的功能，同样使用if也可以实现switch的功能，所有我们在使用时根据自己的习惯选择

        
 */

/* var num = 6
if (num == 1) {
  console.log("一");
} else if (num == 2) {
  console.log("二");
} else if (num == 3) {
  console.log("三");
} else {
  console.log("others");
} */
var num ="2"
switch (num) {
  case 1:
    console.log("一");
    break;
  case 2:
    console.log("二");
    break
  case 3:
    console.log("三");
    break
  case 4:
    console.log("四");
    break
  case 5:
    console.log("五");
    break
  default:
    console.log("非法数字~~");
    break;

    
}
