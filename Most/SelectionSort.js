var arr = [21,23,43,53,21,233,23,32,7];

for(var i = 0; i<arr.length; i++) 
{
    var min = i;
    for(var j = i+1; j< arr.length; j++) {

        if(arr[i] >= arr[j]) {
            min = j
        }
    }
   var res =  swap(arr, min, i)
}
console.log(res)

function swap(arr, min, i) {
    var temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp
    return arr
}