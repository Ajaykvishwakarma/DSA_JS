var str = 'nrupul';
var N = str.length;
var vowel = "aeiou";
  var flag = 0;
  for(var i = 0; i<N; i++) 
  {
      for(var j = 0; j<vowel.length; j++) 
      {
          if(str[i] == vowel[j]) {
              flag = 1;
          }
      }
  }
  if(flag > 0) {
      console.log(true)
  }
  else {
      console.log(false)
  }
  