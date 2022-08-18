let arr = [-1, 2, -3, 1, -5];
function subArray(n)
{
    let max = 0;
    let min = Infinity;
    for(let i = 0; i < n; i++)
    {
       
        for(let j = i; j < n; j++)
        {
            let sum =0;
            for(let k = i; k <= j; k++)
            {
                sum += arr[k];
            }
                
                  
            // min = arr[j];
            if(sum >= max) {
                max = sum
            }
            if(sum <= min) {
                sum = min
            }
        }
    }
    console.log(min)

}
  
subArray(arr.length);