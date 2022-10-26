function selectionSort(arr){
  for(var i=0;i<arr.length;i++){
    let lowest=i
    for(var j=i+1;j<arr.length;j++){
        if(arr[j]<arr[lowest]){
            lowest=j
        }
    }
    var temp = arr[i]
    arr[i] = arr[lowest]
    arr[lowest] =temp
  }
  return arr;
}

let a=selectionSort([10,23,16,12,5,1])
console.log(a)