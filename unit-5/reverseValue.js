
var num = 472;
var sum = "";

while(num > 0) {

    var rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num/10)


}
console.log(sum)

var str = "madam";
var res = ""
for(var i = str.length - 1;  i>=0;  i--) {

    res += str[i];

}
console.log(res)