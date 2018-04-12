function printOddNums(num) {
	for (var i = 1; i <= num; ++i) {
		if (i % 2 === 1) {
			console.log(i);
		}
	}
}

function printOddNumsV2(num) {
	for (var i = 1; i <= num; i += 2) {
		console.log(i);
	}
}

function printOddNumsV3(num) {
	for (var i = 1; i <= num; ++i) {
		if (i % 2 === 0) {
			continue;
		}
		console.log(i);
	}
}

var num;


num = prompt('Select a positive integer: ');

// printOddNums(num);
// printOddNumsV2(num);
printOddNumsV3(num);