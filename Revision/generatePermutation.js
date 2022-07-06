

var arr = [1,2,3];
var curr = 0;
console.log(gPer(arr, curr))
function gPer(arr, curr) {
    if(curr == arr.length) {
        console.log(arr)
        return
    }
    for(i = curr; i<arr.length; i++) {
        swap(arr, i, curr);
        gPer(arr, curr+1)
        swap(arr, i, curr);

    }
}
function swap(arr, i, curr) {

    var temp = arr[curr] 
    arr[curr] = arr[i]
    arr[i] = temp;
    return arr

}