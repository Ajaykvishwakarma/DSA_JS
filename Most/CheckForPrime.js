var N = 7;
var count = 0;

for(var i = 0; i<=N; i++) 
{
    if(N%i == 0) 
    {
        count++;
    }
}
if(count == 2) 
{
    console.log("Yes")
}
else {
    console.log("No")
}