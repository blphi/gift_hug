/* 
  关系运算符
      通过关系运算符可以比较两个值之间的大小关系
      如果关系成立可以返回 true
      如果关系不成立可以返回 false

      >  大于号
        - 判断符号左侧的值是否大于右侧的值
        - 如果关系成立 返回 true ,如果关系不成立则返回false
      >= 大于等于
        - 判断符号左侧的值是否大于或等于右侧的值
      < 小于
      <= 小于等于
      
      
      
      非数值的情况
      对于非数值进行比较时，会先转换为数字，在进行比较
      任何值和NaN进行比较都是false
      如果符号两侧 的值都是字符串，不会将其转换为数字进行比较，而是分别比较两个字符串的unicode编码，比较字符编码时，是一位一位进行比较，如果两位一样，则比较下一位，可以借用此，来对英文进行排序
      如果比较两个字符串型的数字，可能会得到不可预期的结果
      注意在比较两个字符串型的数字时，一定要转型


*/

// var res = 5 > 4  
// res = 3 >= 4
// console.log('res = ' + res);
console.log(1 > true);
console.log(1>=true);
console.log(10>null);
console.log(10>undefined);
console.log(+undefined);
console.log(10>"hello");
console.log("1"<"5");
console.log("11"<"5");








