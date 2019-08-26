/* 

*/
// 创建一个数组
var arr = ["孙悟空","猪八戒","沙和尚"]
/* 
  push()
    - 该方法可以向数组的末尾添加一个或多个元素，并返回数组的新长度
    - 可以将要添加的元素作为方法的参数传递
      这样这些元素将会自动添加到数组的末尾
    - 该方法会将数组的新长度作为返回值返回

*/
var res = arr.push("唐僧","蜘蛛精","白骨精","玉兔精")
// console.log(arr,res);
/* 
  pop()
    - 该方法可以删除数组的最后一个元素
    - 该方法可以将删除的元素作为返回值返回
*/
result = arr.pop()
// console.log(arr);
// console.log("result = "+ result);
/* 
  unshift()
    - 该方法可以向数组的开头添加一个或者多个元素，并返回数组的新长度
    - 向前边插入元素之后，其他元素的索引会一次调整
*/
res = arr.unshift("牛魔王")
res = arr.unshift("二郎神")
// console.log(arr);
// console.log("res = " + res);
/* 
  shift()
  - 可以删除数组的第一个元素，并将被删除的元素作为返回值返回

*/
res = arr.shift()
arr.shift()
console.log(arr);
console.log("res = " + res);