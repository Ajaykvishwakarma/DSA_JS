function runProgram(input) {
	input = input.split('\n');
	var tc = +input[0];
// 	console.log(tc)
	var stack = [];
	for(var i = 1; i<=tc; i++) 
	{
	    var [o, n] = input[i].trim().split(" ");
        
        if(o == "PUSH" ) {
            stack.push(n)
        }
        if(o == "POP") {
            if(stack.length == 0) {
                console.log("EMPTY")
            } else {
                //  console.log(stack[stack.length - 1]);
                stack.pop()
            }
            
        } 
        if(o == "MIN") {
            
            stack.sort((a, b) => a - b)
            // console.log(stack)
            var min = stack[0];
            // console.log(min)
            for(var j = 0; j < stack.length; j++) 
            {
                if(stack[j] < min) {
                    min = stack[j];
                }
            }
            console.log(min)
        }
    
	}
	
}



if (process.env.USERNAME === "ACER") {
	runProgram(`11
    PUSH 5
    PUSH 7
    PUSH 3
    PUSH 8
    PUSH 10
    MIN
    POP
    POP
    MIN
    POP
    MIN`);
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
