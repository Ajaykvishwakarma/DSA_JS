var N = 5;
var K = 9;
var A = [3, 0, 6, 2, 7]

var count = 0;
    for(var i = 0; i<N; i++) {
        
        for(var j = i+1; j<N; j++) 
        {
            if(A[i] + A[j] == K) 
            {
                count++;
                
            }
        }
    }
    console.log(count)