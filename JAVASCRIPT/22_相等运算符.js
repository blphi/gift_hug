/* 
  相等运算符用来比较两个值是否相等
      如果相等会返回true ，否则返回false

      使用 == 来做相等运算
        - 当使用 == 来比较两个值时，如果值的类型不同
          则会自动进行类型转换，将其转换为相同的类型，在进行比较
          undefined 衍生自null,所以这两个值进行相等运算时，会返回true
          NaN不和任何值相等，包括它本身
          可以通过isNaN()函数来判断一个值是否是NaN
          如果该值是NaN则返回true,否则返回false 
  不相等
    不相等用来判断两个值是否不相等，如果不相等，则返回true，否则返回false
      - 使用！= 来进行不相等的判断
      - 不相等也会对变量进行自动的 类型转换，如果转换后相等，它也会返回false
  
  === 
    全等
      - 用来判断两个值是否全等，它和相等类似，不同的 是它不会做自动的类型转换
        如果两个值的类型不同，直接返回false 
  !==
    不全等
      - 用来判断两个值是否不全等，和不等类似，不同的是不会自动做类型转换
        如果两个值的类型不同，直接返回true

*/

console.log(1 == 1);
var a  = 10

console.log(a == 4);
console.log( "1" == 1);
console.log( true == "1");
console.log( true == "hello");
console.log(null == 0);
console.log(undefined == null);
console.log(NaN == NaN);
console.log(NaN == undefined);
var b = 123
console.log(b == NaN)
console.log(isNaN(b))
console.log(10 != 5);
console.log(10 != 10);
console.log("abcd" != "abcd");
console.log("1" != 1);
console.log( "123" === 123);
console.log( null === undefined);
console.log(1 != "1");
console.log(1 !== "1");

















