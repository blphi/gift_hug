/* 
  从键盘输入小明的成绩：
  当成绩为100时i，奖励 “BMW"
  当成绩为[80,99]时，奖励一台 iphone15s
  当成绩为[60,80]时，奖励一本参考书
  其他时，什么奖励也没有
*/
// alert("请输入小明的 成绩：")
// prompt()可以弹出一个提示框，该提示框中会带有一个文本框
// 用户可以在文本框中输入一段内容，该函数需要一个字符串作为参数
// 该字符串会作为提示框中的文字
// 用户输入的内容将会作为函数的返回值返回，可以定义一个变量来接受该内容
// prompt 函数的返回值是一个string类型
/* var score = prompt("请输入小明的成绩[0-100]：")
console.log(score); */
//判断值是否合法
/* if (score > 100 || score <0 || isNaN(score)) {
  console.log("拉出去毙了");
}else{
  if (score == 100) {
    console.log("奖励一台“BMW”");
  } else if (score > 80) {
    console.log("奖励一台 iphone15s");
  } else if (score > 60 ) {
    console.log("奖励一本参考书");
  } else {
    console.log("什么奖励也没有");
  }
}
 */
//练习2 ：高富帅练习
/* var height = +prompt("请输入您的身高(cm):")
var rich = +prompt("请输入您的财富($):")
var face = +prompt("请输入您的颜值(px):")
// alert(height+"cm--"+rich+"$--"+face+"px")
if (height>180 && rich > 1000 && face > 500) {
  alert("我一定要嫁给他")
}else if (height >180 || rich >1000 || face >500) {
  alert("比上不足，比下有余，勉强嫁吧")
}else{
  alert("不嫁")
} */

//比较三个数字 num1,num2,num3的大小
/* var num1 = prompt("请输入第一个数字：")
var num2 = prompt("请输入第二个数字：")
var num3 = prompt("请输入第三个数字：")
if(num1<num2 && num1<num3){
  if (num2<num3) {
    alert(num1 + "," + num2 +","+ num3)
  }else{
    alert(num1+","+num3+","+num2)
  }
}else if(num2<num1 && num2<num3){
  if (num1<num3) {
    alert(num2 + "," + num1 +","+ num3)
  }else{
    alert(num2+","+num3+","+num1)
  } 
}else if (num3<num1 && num3 < num2) {
  if (num1<num2) {
    alert(num3 + "," + num1 +","+ num2)
  }else{
    alert(num3+","+num2+","+num1)
  }
} */
var num = 10

if (num==10) {
  console.log("哈哈哈哈");
}