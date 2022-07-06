var num = 7;
var bag = "";
for(var i = 1 << 30; i>0; i = Math.floor((i/2))) {
    if((num & i) != 0) {
        bag += (1)
    } else {
        bag += (0)
    }
}
console.log(bag)


// o/p :- 
// 00000000000000000000000000000111