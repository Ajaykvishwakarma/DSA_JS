var n = 3, m = 3, s = 6;
var matrix = [[3, 2, 1],
[2, 2, 2],
[1, 5, 1]]

  var count = 0;
  //   var sum = 0; 
     for(var i=0; i<n; i++)
     {
         for(var j=0; j<m; j++){
             if(j<matrix[i].length-2)
             {
                 var temp = matrix[i][j]+matrix[i][j+1]+matrix[i][j+2];
                 if(temp==s)
                 {
                     count++;
                 }
             }
             if(i<matrix.length-2)
             {
                 var temp = matrix[i][j]+matrix[i+1][j]+matrix[i+2][j];
                 if(temp == s)
                 {
                     count++;
                 }
             }
             if(i<matrix.length-2 && j<matrix[0].length-2)
             {
                 var temp = matrix[i+2][j]+matrix[i+1][j+1]+matrix[i][j+2];
                 if(temp == s)
                 {
                     count++;
                 }
             }
             if(i<matrix.length-2 && j<matrix.length-2)
                  {
                      var temp=matrix[i][j]+matrix[i+1][j+1]+matrix[i+2][j+2]
                      if(temp == s){
                          count++;
                      }
                  }
         }
     }
   console.log(count)