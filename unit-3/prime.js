var num = 5;

var count = 0;
for(var i = 1; i<=num; i++) {
    if(num % i == 0) {
        count++;
    }
}

if(count == 2) {
    console.log("YES")
} else {
    console.log("NO")
}