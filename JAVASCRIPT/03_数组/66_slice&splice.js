/* 
  slice  & splice
*/

// 创建一个数组
var arr = ["孙悟空","猪八戒","沙和尚","唐僧","蜘蛛精","玉兔精","二郎神"]
/* 
  slice:可以从数组中提取出指定的元素
    - 参数
      start：截取开始的位置的索引(包含开始位置索引)
      end:截取的结束的位置的索引(不包含结束位置索引)
          end结束参数可以省略不写，此时会截取从开始索引往后的所有元素
      - 索引可以传递一个负值，如果传递一个负值，则从后往前计算，-1 代表倒数第一个，  -2代表倒数第二个   ....
*/
// var res = arr.slice(1,5)
// console.log(arr);
// console.log(res);


/* 
    splice  删除元素，并向数组添加新元素
      - 删除数组中的指定元素
      - 使用splice()会影响到原数组，会将指定元素从原数组中删除，并将删除元素作为返回值返回
      - 参数：
          第一个：表示开始位置的索引
          第二个：表示删除的数量
          第三个及以后：可以传递一些新的元素，这些元素将自动插入到开始位置索引的前边
*/
var res= arr.splice(1,0,"牛魔王","铁扇公主")
console.log(arr);
console.log(res);
