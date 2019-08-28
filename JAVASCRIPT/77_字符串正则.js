/* 
    字符串和正则相关的方法
*/
/* 
    split()
        - 可以将一个字符串拆分为一个数组
        - 方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式去拆分字符串 
        - 这个方法即使不指定全局匹配，也会全部拆分

*/
var str = "1s2n3f1we2s3dafdfdsc3sf234dc34233cxcdd"
var res = str.split(/[A-z]/)
// console.log(res);
/* 
    search()
        - 可以搜索字符串中是否含有指定内容
        - 如果搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1
        - 它可以接受一个正则表达式作为参数，然后会根据正则表达式去检索字符串
        - 这个方法只会查找第一个，即使设置全局匹配也没用
*/
str = "hello a1bc hello a1bc 1a`fc"
result = str.search(/a[bef]c/)
// console.log(result);
/* 
    match()
        - 可以根据正则表达式，从一个字符串中将符合条件的内容提取出来
        - 默认情况下，我们的match只会找到第一个符合要求的内容，找到之后就停止检索，我们可以设置正则表达式为全局匹配模式，这样就会匹配到所有的内容
        -  可以为一个正则表达式设置多个匹配模式，且顺序无所谓
        - match()会将匹配到的内容封装到一个数组中返回，即使只查询到一个结果
*/
str = "1a2b3c4da5aaea6af7A9B0C"
result = str.match(/[A-z]/gi)
// console.log(Array.isArray(result));
/* 
    replace()
        - 替换，可以将字符串中的指定的内容替换为新的内容
        - 参数
            1，被替换的内容,可以接受一个正则表达式作为参数
            2，新的内容

*/
result = str.replace(/[A-z]/gi,"")
console.log(result);