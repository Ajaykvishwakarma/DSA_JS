var s = "abcab";
var arr = [];
    
for(var i = 0; i<s.length; i++) {
    var bag = "";
    for(var j = i; j<s.length; j++) {
        bag = bag + s[j]
        arr.push(bag)
    }
}
var count = 0 ;
for(var i = 0; i<arr.length; i++) 
{
    var a = arr[i];
    if(a[0] == a[a.length-1]) {
        count++;
    }
}
console.log(count)