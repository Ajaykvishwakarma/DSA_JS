var n = 5;
for(var i = 1; i<=n; i++) 
{
    var bag = ""
    for(var j = n; j>=i; j--) 
    {
        
        bag += "*"+" "
    }
       for(var j = 1; j<i; j++) 
    {
        
        bag += " "+" "
    }
    console.log(bag)
}