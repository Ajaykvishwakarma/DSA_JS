

function factorial(N) {
    if(N == 0 || N == 1) {
        return 1;
    }
    return (N * factorial(N - 1))
}

console.log(factorial(5));