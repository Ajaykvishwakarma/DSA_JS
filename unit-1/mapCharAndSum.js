var str = 'abc';
var K = 3;
var N = 30;
 var alp = "abcdefghijklmnopqrstuvwxyz";
   
 var sum = 0;
 for(var i = 0; i<alp.length; i++) 
 {
     for(var j = 0; j<str.length; j++) 
     {
         if(str[j] == alp[i]) {
             sum = sum + (i + N)
             
         }
     }
     
 }
 console.log(sum)
