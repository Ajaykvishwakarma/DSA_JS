var N = 4;
for(var i = 1; i<=N; i++) 
{
    var bag = "";
    for(var j = 1; j<=i; j++) 
    {
        bag += i + " ";
    }
    console.log(bag)
}

// o/p:-
// 1
// 2 2
// 3 3 3
// 4 4 4 4