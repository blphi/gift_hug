/*
    Math
      - Math和其他对象不同，它不是一个构造函数
        它属于一个工具类，不用创建对象，它里面封装了一些数学的方法
 */
// abs(x)  可以用来计算一个数的绝对值
// console.log(Math.abs(-1));
// ceil() 对一个数值进行向上取整,小数位只要有值就会自动加1
// console.log(Math.ceil(1.1));  //2
// floor() 对一个数值进行向下取整,小数部分会被舍弃
// console.log(Math.floor(1.99));  //1
// round() 可以对一个数进行四舍五入  
// console.log(Math.round(1.9));
// random()   可以用来生成一个0到1之间的随机数
// Math.round(random()*x)    生成一个0到x之间的随机数
// Math.round(Math.random()*(y-x))+x     生成一个x到y之间的随机数
for(var i=0;i<100;i++){
  // console.log(Math.round(Math.random(i)*10))
}
// console.log(Math.random());
// 生成一个1到6之间的随机数
for(var i =0;i<100;i++){
  console.log(Math.round(Math.random()*5)+1)
}

// max()  可以获取多个数中的最大值
// min()  可以获取多个数中的最小值

var res = Math.max(10,290,30,333,335)
console.log(res);

// Math.pow(x,y)  返回x的y次幂
// Math.sqrt()   对一个数进行开方运损
console.log(Math.pow(2,3));
console.log(Math.sqrt(81));