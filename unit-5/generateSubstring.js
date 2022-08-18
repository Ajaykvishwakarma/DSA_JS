var name = "masai";

for(var i = 0; i<name.length; i++) {

    for(var j = i+1; j<=name.length; j++) {
        var subStr = "";
        for(var k = i; k<j; k++ ) {
            subStr = subStr + name[k];
        }
        console.log(subStr)
    }
}

var data = [];
for(var i = 0; i<name.length; i++) {
    var res = "";

    for(var j = i; j<name.length; j++) {
        res = res + name[j];
        data.push(res)

    }
}

console.log(data)