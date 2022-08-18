var arr = [21,32,43,54,55,67,80];

for(var i = 0; i<arr.length; i++) {
    var min = i;
    for(var j = i+1;  j<arr.length; j++) {
        if(arr[i] >= arr[j]) {
            min = j;
        }
    }
    var res = swap(arr, min, i)
}

console.log(res)

function swap(arr, min, i) {
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
    return arr;
}