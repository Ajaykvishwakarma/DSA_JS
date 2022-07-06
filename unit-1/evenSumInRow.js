
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var N = 3, M = 3


for(var i = 0; i<N; i++) 
{
  var sum = 0;
  for(var j = 0; j<M; j++) 
  {
    if(arr[i][j] % 2 === 0){
        sum += arr[i][j];
    }
    
  }
  console.log(sum)
}