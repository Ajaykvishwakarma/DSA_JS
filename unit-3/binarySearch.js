
function binarySearch(arr, x) {

    var start = 0;
    var end = arr.length ;
    var res = 0;

    while(start <= end) {
        var mid = Math.floor((start +  (end - start)/2));
        if(x == arr[mid]) {
            return 1;
        } else if(x < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1;
        }
        start++
    }
    return -1
}

var arr = [22,3,4,5,6,7];
arr.sort()
var x = 22;
console.log(binarySearch(arr, x))