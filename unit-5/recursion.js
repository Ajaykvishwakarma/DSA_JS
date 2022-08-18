

function printArr(arr, N,i) {

    if( i== N) {
        return
    } 
    console.log(arr[i])
    printArr(arr, N,i+1) 

}

var arr = [1,2,4,5,7,8,9];
var N = arr.length;
var i = 0;

printArr(arr, N,i) 