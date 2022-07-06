function runProgram(input) {
	input = input.split('\n');
    var n = +input[0];
    var arr = []
    for(var i = 1; i<=n; i++) 
    {
        var  a = input[i].trim().split(" ");
        arr.push(a)
        
    }
    check(arr)
	
}
function check(arr) {
    // console.log(arr)
    var max = 0;
    var res ;
    for(var i = 1; i < arr[0].length; i++) {
        for(var j = 0; j<arr.length; j++) 
        {
            if(arr[j][i] > max) 
            {
                max = arr[j][i];
                res = arr[j][i-1]
            }
        }
    }
    console.log(res)
}



if (process.env.USERNAME === "AJAY") {
	runProgram(`4
    ankit 10
    amit 40
    shivam 25
    shubham 33`);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
} 
