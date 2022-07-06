
var arr = [2,3,4,5,12,33,1];

for(var i = 0; i<arr.length; i++) 
{
    for(var j = 0; j<arr.length-i-1; j++) 
    {
        if(arr[j] > arr[j+1]) {
            var v = (j+1)
            var res = swap(arr, j, v)
        }
    }
}
console.log(res)

function swap(arr, j, v) {
    var temp = arr[v]
    arr[v] = arr[j]
    arr[j] = temp;
    return arr;
}