var N = 3;

var array = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
squireMatrix(array)
function squireMatrix(array)
{
    
    for(var i=0; i<array.length; i++)
    {
        var bag = "";
        for(var j=0; j<array.length; j++)
        {
            var sum = 1+array[i][j];
            bag = bag +sum +" ";
        }
        console.log(bag)
    }
    
}
