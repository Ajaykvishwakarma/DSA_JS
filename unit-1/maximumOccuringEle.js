var A = [0, 2, 0, 6, 9];

var arr = {};
for(var i=0; i<A.length; i++){
    var char = A[i];
    
    if(arr[char]==undefined)
    {
        arr[char]=1;
    }
    else
    {
        arr[char]=arr[char]+1;
    }
}

var max = 0;

for(var i in arr){
    if(arr[i]>max)
    {
       max = arr[i];
       var res =i;
    }
    
}
console.log(res)