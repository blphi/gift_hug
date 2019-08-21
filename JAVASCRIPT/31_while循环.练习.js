/* 
  加入 投资的年利率为5%,s试求从1000增长到5000需要花多少年
*/
//定义一个变量，表示当前的money
var money = 1000
//定义一个计数器
var  count = 0  
while (money<5000) {
  money*=1.05
  count+=1
}
console.log("一共需要" + count + "年");