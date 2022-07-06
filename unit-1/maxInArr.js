var arr = [1, 2, 3, 4, 5];

var max = arr[0];
    
    for(var i = 0; i<arr.length; i++) 
    {
        if(arr[i] > max ) {               // change for minimum if(arr[i] < max)
            max = arr[i]
        }
    }
    console.log(max)

// o/p :-
// 5