var day = "Wednesday";
var N = 8;

var obj = {
    Monday : 1,
    Tuesday : 2,
    Wednesday : 3,
    Thursday: 4,
    Friday: 5,
    Saturday : 6,
    Sunday : 0
}
var v = N%7;

  for(var x in obj) {
      if(x == day) {
          var y = (obj[x] + v)%7;
      }
  }
  for(var x in obj) {
      if(y == obj[x]) {
          console.log(x)
      }
  }