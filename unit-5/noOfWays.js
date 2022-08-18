

function noOFWays(N) {

    if( N == 0) {
        return 1;
    } 
    if( N < 0) {
        return 0;
    }else {

        return (noOFWays(N - 1) + noOFWays(N - 2) + noOFWays(N - 3)) 
    }
}
console.log(noOFWays(4))