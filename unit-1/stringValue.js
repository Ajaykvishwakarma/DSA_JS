var S = 'aba'
var alp = "abcdefghijklmnopqrstuvwxyz";
var sum = 0;
for(var i = 0; i<alp.length; i++) 
{
    for(var j = 0; j<S.length; j++) 
    {
        if(alp[i] == S[j]) {
            sum = sum + (i+1)
        }
    }
}
console.log(sum)