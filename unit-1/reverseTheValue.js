var num = 971;


var bag = "";
while(num != 0) {
    
    var rem = num % 10;
    bag += rem
    num = Math.floor(num / 10);
    
}
console.log(bag)

// o/p :- 
// 179