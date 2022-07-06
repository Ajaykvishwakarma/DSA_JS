var a = 17, b = 11;

var count1 = 0;
    var count2 = 0;
    
    for(var i = 0; i<=a; i++) 
    {
        if(a%i == 0) {
            count1++;
        }
    }
     for(var i = 0; i<=b; i++) 
    {
        if(b%i == 0) {
            count2++;
        }
    }
    
    if(count1 == count2 && count1 == 2) 
    {
        console.log("True")
    }else {
        console.log("False")
    }