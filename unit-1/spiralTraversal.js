var  N = 3, M = 4;

var arr = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]]

var count = 0;
var size = N*M;
var top = 0;
var bottom = N-1; //3
var left = 0; 
var right = M-1; //2
var bag = "";

while(count<size)
{
    for(var i=top; i<=bottom && count<size ; i++)
    {
        bag = bag + arr[i][left]+" ";
        count++;
    }
    left++;
    for(var i=left; i<=right && count<size ; i++)
    {
        bag = bag + arr[bottom][i]+" ";
        count++;
    }
    bottom--;
    for(var i=bottom; i>=top && count<size; i--)
    {
        bag = bag + arr[i][right]+" ";
        count++;
    }
    right--;
    for(var i=right; i>=left && count<size; i--)
    {
        bag = bag + arr[top][i]+" ";
        count++;
    }
    top++;
    
}
console.log(bag)