/* 
  创建一个对象
  var obj = new Object()
*/
// 使用字面量来创建一个对象
var obj = {}
// console.log(typeof obj);
obj.name = "swk"
// console.log(obj.name);
/* 
  使用对象的字面量，可以再创建对象时，直接指定对象中的属性
  语法：
    {属性名：属性值，属性名：属性值,...}
    对象字面量的属性名可以加引号，也可以不加，建议不加
    如果要使用一些特殊的名字，则必须加引号
    属性名和属性值是一组组的名值对的结构，名和值之间使用：连接，多个明知对之间使用,隔开，如果一个属性之后没有其他属性了，就不要写,了
*/
var obj2 = { name: "zbj", age: 15, gender: "male" , test : { name : "shs"}}
console.log(obj2.test);
