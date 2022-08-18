var arr = [1,2,3,4,5,4,3];
var arr1 = [3,2,3,4,3,1,2];

var left = 0;
var right = arr.length - 1;

var count = 0;
while(left < arr.length && right >= 0) {

    if(arr[left] < arr1[right]) {
        left++;
    } else if(arr[left] > arr1[right]) {
        right++
    } else {
        count++;
        left++;
        right++;
    }

}

console.log(count)