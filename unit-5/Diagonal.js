

var arr = [[1,2,3], [4,5,6], [7,8,9]];
var bag1 = "";
var bag2 = "";

for(var i=0; i<arr.length; i++) {
    bag1 += arr[i][i] + " ";
    bag2 += arr[i][arr[0].length-1-i] + " ";
}

console.log(bag1)
console.log(bag2)