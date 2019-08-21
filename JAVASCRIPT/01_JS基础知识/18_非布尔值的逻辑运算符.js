/* 
    && || ! 非布尔值的情况
      - 对于分布尔值进行与或运算时
          会将其转换为布尔值，然后在运算，并且返回原值
          &&  找false
            如果两个值中有false 则返回靠前的false
            如果两个值都为true 则返回第二个true
            如果第一个值为true ，则返回第二个值
            如果第一个值为false, 则返回第一个值
          || 找true
            如果第一个值为true ,则直接返回第一个值
            如果第一个值为false，则返回第二个值

         
*/

var res = 1 && 2
res = 0 && 2
res = 2 && 0
res = NaN && 0 
console.log(" res = " + res);

res = 1 || 2
res = NaN || 2
res = 2|| NaN
res = undefined || null
res = "" || "hello"
res = -1 || "你好"
console.log('res = ' + res);



