
console.log(sqroot (16))
function sqroot (N) {

    var start = 0;
    var end = N - 1;
    var res = -1;
    while(start <= end) {

        var mid = Math.floor(start + (end - start)/2);
        // var rem = mid % 1;
        // mid = mid - rem;
        if( N == 1) {
            return 1;
        } 
        if( N == (mid*mid)) {
            return mid;
        } else if( N < (mid * mid)){
            end = mid - 1;
        } else {
            start = mid + 1;
            res = mid;
        }
    }
    return res;
}