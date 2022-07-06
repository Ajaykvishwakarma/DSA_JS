var matrix = [[1, 8, 9],[2, 7, 10],[3, 6, 11],[4, 5, 12]];

var N = matrix.length;
var M = matrix[0].length;

  var bag = "";
   
      
  for(var j = M-1; j>=0; j--) 
  {
      var bag1 = ""
       for(var i = 0; i<N; i++) 
        {
    
        bag1 += matrix[i][j]+" ";
    
    
  }
  bag += bag1 + ""
  
}
console.log(bag)