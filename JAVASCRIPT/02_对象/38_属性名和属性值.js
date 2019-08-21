/* 
  属性名
    - 对象的属性名 不强制要求遵循标识符规范，什么名字都可以使用，但是使用时还是尽量按照标识符的规范去做
    - 如果使用特殊的属性名，不能使用.的方式来操作，要使用另一种方式
      语法：
        对象["属性名"] = 属性值
        读取时也使用这种方式
        使用[]的方式去操作属性，更加的灵活
        在[]中可以传递一个变量，这样变量的值是哪个就会读取哪个属性
  属性值
    - JS对象的属性值可以是任意的数据类型，甚至也可以是一个对象
  
  in 运算符
    检查一个对象中是否含有指定的属性
    如果有的话 返回true 没有的话 返回false
    语法：
    "属性名" in 对象
*/
  var obj = new Object();
  var n = "123"
  obj["123"]   = 123
  console.log(obj["123"])
  console.log(obj[n])
  var obj2 = new Object();
  obj.test = obj2
  console.log(obj.test);
  console.log( "123" in obj);
  console.log("hello" in obj); 
  console.log("test" in obj)