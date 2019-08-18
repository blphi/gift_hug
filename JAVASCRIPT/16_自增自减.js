/* 
  自增
      通过自增可以使变量在自身的基础上增加1
      对于一个变量自增以后，原变量的值会立即自增1
      自增分成两种：后++(a++) 和 前++(++a)
      无论是a++ 还是 ++a 都会立即使原变量的值自增1
      不同的是a++ 和 a++ 的值不同
      a++ 的值等于原变量的值，等于自增之前的值
      ++a 的值等于原变量自增后的值，等于原变量的新值
  自减
      通过自减可以使变量在自身的基础上减1
      自减分成两种：后--(a--) 和 前--(--a)
      无论是a-- 还是 --a 都会立即使原变量的值立即减1
      不同的是 a-- 和 --a 的值 不同
      a--是变量 的原值
      --a是变量的新值，自减之后的值
*/

var a = 1
var b= 1

// a++



// console.log("a++ = " + a++);
// console.log("++b = " + ++b);

// console.log(a);
var c = 10 
// var res = c++ + ++c + c++
//  res = 10 + 12 +12
res =  c++ + --c +c++
// res = 10 + 10 +10
// console.log("res = " + res);
var d = 20
d = d++
d = d++ + ++d + d
//d = 20 + 22 + 22
// console.log(d);


// 自减

var num = 10

// --num

// console.log(--num);
// console.log(num--);

var n1 = 10 , n2 = 20
var n = n1++
console.log('n = ' + n ); //10
console.log('n1 = ' + n1); //11

n = ++n1
console.log('n = ' + n); //12
console.log('n1 = ' + n1);//12

n = n2--
console.log('n = '+ n); // 20
console.log('n2 = ' + n2); // 19

n= --n2
console.log('n = ' + n); //18
console.log('n2 = ' + n2); //18

;










