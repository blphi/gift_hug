/* 
    if语句
        语法二：
            if(条件表达式){
              语句...
            }else{
              语句...
            }
        if...else...语句
            当该语句执行时，会先对if 后的条件表达式进行求值判断
            如果该值为true,则执行if后的语句
            如果该值为false，则执行else后的语句
        语法三：
              if(条件表达式){
                语句...
              }else if(条件表达式){
                语句...
              }else if(条件表达式){
                语句...
              }{
                ...
              }else{
                语句
              }
              当该语句执行时，会从上到下依次对条件表达式进行求值判断，
              如果值为true,则执行当前语句
              如果值为false，则继续向下判断
              如果所有条件都不满足，则执行else 后面的语句的代码块
              该语句中只会有一个代码块执行，如果该语句执行了，则直接结束语句


*/
var age = 75
if (age >= 60) {
  console.log("你已经退休了");
}else{
  console.log("你还没有退休");
}
if (age > 100) {
  console.log("活着挺没意思");  
} else if(age > 80){
  console.log("你也老大不小了");
}else if(age > 60){
  console.log("你也退休了");
}else if(age > 30){
  console.log("你已经中年了");
}else if(age > 17){
  console.log("你已经成年了");
}else{
  console.log("你还是个孩子");
}
if(age > 17)