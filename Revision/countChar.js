let str1 = "aaaaabbbdddkkkkaaa";

// var bag = "";
// var left = 0;
// while(left < str.length) {
//     var count = 0;
//     for(var j = left; j<str.length; j++) {
//         if(str[left] == str[j]) {
//             count++;
            
//         }
//     }
//     console.log(count);
//     left++;
// }

// console.log(bag)

// function count (str) {  
//     var count = {};
//     str.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
//   }


//   var obj = count(str);
//   var bag = ""
//   for(var x in obj) {
   
//     bag += x+obj[x];
//   }

//   console.log(bag)

let counter = str => {
    return str.split('').reduce((total, letter) => {
      total[letter] ? total[letter]++ : total[letter] = 1;
      return total;
    }, {});
  };
  
  console.log(counter(str1))