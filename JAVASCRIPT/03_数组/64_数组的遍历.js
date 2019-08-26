// 创建一个数组
var arr = ["孙悟空","猪八戒","沙和尚","玉兔精","唐僧"]
// 所谓遍历数组，就是将数组中的所有元素都取出来
for(var i =0 ;i<arr.length;i++){
  console.log(arr[i])
}
/* 
  练习：

*/
function Person(name,age) {
  this.name = name
  this.age = age 
}
var per = new Person("孙悟空",18)
Person.prototype.toString = function () {
  return "Person [ name = "+ this.name + ", age = " + this.age +"]"
}

var per2 =  new Person("猪八戒",26)
var per3 =  new Person("沙和尚",30)
var per4 = new Person("唐僧",18)
var per5 =  new Person("玉兔精",16)
var per6 = new Person("红孩儿",6)
// console.log(per.toString());
var perArray = [per,per2,per3,per4,per5,per6]
// 创建一个函数提取出perArray中的满18岁的人提取出来，并封装为新的数组
function getAdult(arr) {
  var newArr = []
  // 遍历perArray，获取每个对象中的age判断age是否大于18,如果成立添加到新数组newArr中
  for(var i = 0 ; i<arr.length; i++){
    if (arr[i].age>=18) {
      newArr.push(arr[i])
    }
  }

  return newArr
}
var res = getAdult(perArray)
console.log(res);

