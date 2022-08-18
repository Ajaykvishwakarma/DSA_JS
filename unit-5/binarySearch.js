
var arr = [1,2,4,5,6,7];
var x = 5;
console.log(search(arr, x))
function search(arr, x) {
var start = 0;
var end = arr.length - 1;
var res = -1;

while( start <= end) {

    var mid = Math.floor((start + end) / 2);

    if(x == arr[mid]) {
        return 1;
    } else if (x < arr[mid]) {
        end = mid - 1;
    } else {
        start = mid + 1;
    }

    

}
return -1

}

