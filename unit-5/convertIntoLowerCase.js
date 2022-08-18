

function loverCase(char) {

    var bag = "";
    var upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var low = "abcdefghijklmnopqrstuvwxyz";

    for(var i=0; i<upp.length; i++) {
        if(upp[i] == char) {
            bag += low[i]
        }
    }

    console.log(bag)

}
var char = "V";
loverCase(char)