function isPrime(num) {
	if (num === 2) { return true; }
	
	if ((num <= 1) || num % 2 === 0) {
		return false;
	} 

	for (var i = 3; i < num; i += 2) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

function checkGoldbach(num) {
	var largeAddend = 0;

	if (num % 2 === 1 || num < 4) {
		console.log(null);
		return;
	}

	for (var smallAddend = 1; smallAddend <= (num/2); ++smallAddend){
		largeAddend = num - smallAddend;
		if (isPrime(smallAddend) && isPrime(largeAddend)){
				console.log(String(smallAddend) + ' ' + String(largeAddend));
		}
	}
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53