/* 
  通过程序在页面输出由*组成的三角形
*/
// 向body中输入 一行*
// console.log("******\t");
// console.log("******\t");
// console.log("******\t");
// console.log("******\t");
// console.log("******\t");
for (var i = 1; i < 5; i++) {
  // console.log("*******************\t")
  for (var j = 1; j <= 5 - i; j++) {
    // console.log(1)
    document.write("*" + "&nbsp;")
  }
  // console.log("")
  document.write("<br/>")
}
/**
 * 打印99乘法表
 */
// 创建外层循环控制乘法表的高度
for (var i = 1; i < 10; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("<span>" + j + "*" + i + "=" + (j * i) + "</span>")
  }
  document.write("<br/>")
}

/**
 * 质数练习
 * 打印出1~100之间所有的质数
 */
// 打印出1~100之间所有的数
// 测试程序的性能
// 在程序开始时开启计时器
// 可以通过console.time("字符串")来开启一个计时器
// 他需要一个字符串作为计时器的名字，作为计时器的标识
console.time("test")
for (var i = 2; i <= 100000; i++) {
  // console.log(i)
  for (var j = 2, flag = true; j <= Math.sqrt(i); j++) {
    // console.log(j);
    // 判断j是否能被整除
    if (i % j == 0) {
      //如果进入if判断则不是质数
      flag = false
      // 一旦进入循环则可以确定不是质数
      // 可以使用break来终止循环
      break
    }
  }
  // 如果是质数，则打印i的值
  if (flag) {
    // console.log(i);
  }
}
console.timeEnd("test")
