var arr = [ 3, 5, 7, 8, 10 ];
var min = arr[0];

for(var i = 0; i<arr.length; i++) 
{
    if(arr[i] < min) 
    {
        
        min = arr[i];
    }
}
// min = Math.min(...arr)
console.log(min)