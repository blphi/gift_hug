/* 
  for语句也是一个循环语句，也称为for循环
  在for循环中，为我们提供了专门的位置用来放三个表达式
    1.初始化表达式
    2.条件表达式
    3.更新表达式
  语法：
    for(初始化表达式;条件表达式；更新表达式){
      语句。。。
    }
    for循环的执行流程
      1,执行初始化表达式，初始化变量
      2,执行条件表达式，判断是否执行循环
        如果条件表达式值为true，则执行循环
        如果为false，则终止循for环
      3 执行更新表达式
        更新表达式执行完毕，继续重复步骤2
*/
//创建一个执行10次的while循环
// 初始化呢表达式
/* var i = 0
// 创建一个循环 定义条件表达式
while (i<10) {
  //设置更新表达式
  console.log(i++);
} */
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
/* 
  for循环的三个部分都可以省略，也可以写在外部
    如果for循环中不写任何的表达式，只写两个分号
    此时循环会使一个死循环，会一直执行下去去，慎用
*/
// i = 0
// for(var i = 0 ;i<10;){
//   i++
//   console.log(i);
// }
// for(var i = 0 ;i<10;){
//   console.log(1);
// }
/* 
  打印1~100之间所有的奇数之和
*/

for(var i=1 , sum = 0;i<=100;i+=2){
  sum += i;
}
console.log(sum);
/* 
  打印1~100之间所有7的倍数及总和

*/
for(var i=1,sum = 0,count= 0;i<=100;i++){
  if (i%7==0) {
    console.log(i);
    count++;
    sum+=i
  }
}
console.log("100以内7的倍数的总和为" +sum)
console.log("100以内7的倍数的个数为"+ count);
/* 
  水仙花数是指一个三位数它的每个位上的数字的三次幂之和等于他本身

*/
for(var i =100;i<1000;i++){
  //分别获取i的各个位上的数字
  //百位
  var bai = parseInt(i/100)
  //十位
  var shi = parseInt((i - bai * 100)/10)
  //个位
  var ge  = i%10
  if (bai*bai*bai+shi*shi*shi+ge*ge*ge === i) {
    console.log(i);
  }
}

