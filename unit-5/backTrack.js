

var arr = [1,2,3];

var new_str = "";
subsets(new_str, arr, 0)

function subsets(new_str, arr, index) {

    if(new_str.length != 0) {
        console.log(new_str)
    }
    if( index == arr.length) {
        return
    }

    for(var i = index; i<arr.length; i++) {
        let x = new_str;
        new_str += arr[i] + " ";
        subsets(new_str, arr, i + 1)
        new_str = x;
    }
}