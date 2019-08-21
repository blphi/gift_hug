/* 
    JS中我们提供了三种逻辑运算符

    ！ 非
        - 可以用来对一个值进行非运算
        - 所谓非运算就是对一个布尔值进行取反操作
            true 变为 false  false 变为 true
        - 如果对一个值进行两次取反，它的值不变
        - 如果对非布尔值进行运算，则会将其转换为布尔值，然后在取反
            所以我们可以利用这一个特点，来将一个其他的数据类型转换为布尔值
            可以为一个任意数据类型取两次饭，来将其转换为布尔值
            原理和Boolean()函数一样


    &&  与  找false
        - &&可以对符号两侧的值进行与运算并返回结果
        - 运算规则
            - 只要有一个值为false 则返回false
                true && false  => false
                false && false => false
            - 如果两个值都是true 则返回true
                true && true => true
            - 两个值中只要有一个值为false 就会返回false
              只有两个值都为true 才会返回true
            - JS中的&&为短路的与,
                如果第一个值为false，则不会看第二个值
    ||  或  找true
        - || 可以对符号两侧的值进行或运算并返回结果
        - 运算规则
            - 两个值中只要有一个true 就返回true
            - 如果两个值都会false，就返回 false
            - JS中的 “或” 属于一个短路的 “或”
              如果的第一个值为true 则不会检查第二个值


*/

var a = false
a = !!a
console.log('a = ' + a);
var b = undefined
b = !!b
console.log('b = ' + b);
console.log(typeof b);
console.log(false && "看我出来吗");
var res = true  || false 
console.log(res);
false || console.log(123)
true || console.log(21321)



