/**
 * break语句可以用来退出switch或循环语句
 * 不能再if语句中使用break和continue
 * break会立即终止离他最近的外层的循环语句
 * 可以为循环语句创建一个label，来表示当前的循环
 * 使用break语句时可以在break后跟着一个label，来结束指定的循环
 */
for(var i=0;i<10;i++){
  if (i==5) {
    break
  }
  console.log(i)
}
if (true) {
  console.log(1111);
}
// outer:
// for(var i=0;i<22;i++){
//   console.log("@@@外层循环"+i)
//   for(var j = 0;j<22;j++){
//     console.log("~~~~内层循环"+j)
//     break outer
//   } 
// }

/**
 *  continue  关键字是用来跳过当次循环 
 *  同样continue也是默认只会对离他最近的循环起作用
 */
for(var i=0;i<5;i++){
  for(var j=0;j<5;j++){
    if (j==2) {
      continue
    }
    console.log("~~~~~内层循环"+j)
  }
  console.log("@@@@@@外层循环"+i)
}