/* 
 在页面中接受一个用户输入的数字，并判断该数是否是质数
 质数：只能被1和他自身整除的数，1不是质数也不是合数，质数必须是大于1的数字
*/
var num = prompt("请输入一个大于1的数字：")
// 设置默认是质数
var flag = true
//判断输入的数字是否合法
if (num<=1) {
  console.log("该值不合法");
}else{
  //判断num是否是质数
  //获取2~num之间的数
  for(var i=2;i<num;i++){
    if (num%i ==0) {
      // 设置不是质数
      flag = false
      //num能被i整除，则num不是质数
      console.log("num 不是质数");
      break
    }
  }
  if (flag) {
    console.log(num + "是质数");
  }
}

