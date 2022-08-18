
var arr = [[1,2,3], [4,5,6], [7,8,9]];

var bag = "";

for(var i = 0; i<arr.length; i++) {

    if( i % 2 == 0) {
        for(var j = 0; j<arr[0].length; j++) {
            bag += arr[i][j] + " ";
        }
    } else {
        for(var j = arr[0].length-1; j>=0; j--) {
            bag += arr[i][j] + " ";
        }
    }
}

console.log(bag)