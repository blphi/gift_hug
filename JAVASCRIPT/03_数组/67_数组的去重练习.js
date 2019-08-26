/*
  数组的去重

 */
var arr = [1,2,3,2,1,3,4,5,2,5,2,2,2,2,3,5,1,2,3]
for(var i = 0;i<arr.length;i++){
  // console.log(arr[i])
  for(var j = i+1 ; j<arr.length;j++){
    if (arr[i]== arr[j]) {
      arr.splice(j,1)
      j--;
    }
  }
}
console.log(arr);