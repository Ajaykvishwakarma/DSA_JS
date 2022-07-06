
var arr1 =[ 4 ,5, 7]
var arr2 = [9, 2, 5]

    for(var i = 0; i<arr2.length; i++) 
    {
        arr1.push(arr2[i])
    }
  
    var obj = {};
    for(var i = 0; i<arr1.length; i++) 
    {
        if(obj[arr1[i]] === undefined) {
            obj[arr1[i]] = 1;
        }
        else {
            obj[arr1[i]]++;
        }
    }
    for(var x in obj) 
    {
        if(obj[x] == 2) 
        {
            console.log(x)
            break;
        }
    }

    //intersection means common element in both array