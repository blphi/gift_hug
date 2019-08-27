/* 
  Date 对象
    - 在JS中使用Date对象表示一个时间
    - 
*/

// 创建一个Date对象
// 如果直接使用构造函数创建一个date对象，则会封装为当前代码执行的时间
var d = new Date()
// 创建一个指定的时间对象
// 在构造函数中传递一个表示时间的字符串作为参数
// 日期的格式：月份/日/年/  时：分：秒
var d2 = new Date("2/18/2011 11:10:30")

// console.log(d2);
/* 
  getDate()
    - 获取当前日期是几号
  getDay()
    - 获取当前日期对象时周几，会返回一个0到6的值，0表示周日
*/
var date = d2.getDate()
var day = d2.getDay()
// console.log(date);
console.log(day);
/* 
  getMonth()
    - 获取当前日期对象时几月，会返回一个0-11的值，0表示1月，1表示2月。。。11表示12月

*/
var month = d2.getMonth()
console.log(month);

/* 
    getFullYear()
      - 获取当前日期对象的年份
        getYear()已经废弃不用
*/
var year = d2.getFullYear()
console.log(year);

/* 
  getHours()   获取当前日期对象的小时  
  getMinutes()   获取当前日期对象的分钟  
  getSeconds()  获取当前日期对象的秒  
  getMilliseconds() 获取当前日期对象的毫秒
  getTime()  获取当前日期对象的时间戳
    - 时间戳：指的是从格林威治标准时间：1970年1月1日0时0分0秒，到当前时间对象所花费的毫秒数
    - 计算机底层在保存时间时，使用的都是时间戳
*/
var time = d2.getTime()
var d3 = new Date("1/1/1970 0:0:0")
time = d3.getTime()
// console.log(time/1000/60/60);
/* 
  获取当前的时间戳
    time = Date.now()
    利用时间戳可以用来测试代码执行的性能
*/
var time2 = Date.now()
var start = Date.now()
for(var i=0;i<10000;i++){
  console.log(i)
}
var end = Date.now()
var delta = end - start 
console.log("执行了 "+ delta + "毫秒");

// console.log(time2);