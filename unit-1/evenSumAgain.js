var num = 4;

for(var i = 1; i<=num; i++) {
        
    var sum = 0;
    for(var j = 1; j<=i; j++) {
        if(j % 2 == 0) {
          sum += j;  
        }
        
    }
    console.log(sum);
}

// o/p :- 
// 0
// 2
// 2
// 6