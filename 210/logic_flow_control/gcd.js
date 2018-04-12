function gcd(int1, int2) {
	var largerNum;
	var smallerNum;

	largerNum = Math.max(int1, int2);
	smallerNum =  Math.min(int1, int2);

	for (var i = smallerNum; i >= 1; --i) {
		if (smallerNum % i === 0) {
			// for divisors of the smaller number, 
			// verify if they are also divisors of larger number
			if (largerNum % i === 0) {
				console.log(i);
				return;
			}
		}
	}
}

function gcdV2(int1, int2) {
	var largerNum;
	var smallerNum;
	var divisor;
	var dividend;
	var remainder;
	var temp;

	largerNum = Math.max(int1, int2);
	smallerNum =  Math.min(int1, int2);

	dividend = largerNum;
	divisor = smallerNum;

	do {
		remainder = dividend % divisor;
		if (remainder === 0) {
			console.log(divisor);
			return;
		}
		dividend = divisor;
		divisor = remainder;
	} while (true) 
}


function gcdV3(int1, int2) {
	var largerNum;
	var smallerNum;
	var divisor;
	var dividend;
	var remainder;
	var temp;

	largerNum = Math.max(int1, int2);
	smallerNum =  Math.min(int1, int2);

	dividend = largerNum;
	divisor = smallerNum;

	do {
		remainder = dividend % divisor;
		if (remainder === 0) {
			return divisor;
		}
		dividend = divisor;
		divisor = remainder;
	} while (true) 
}


// gcd(12, 4);   // 4
// gcd(15, 10);  // 5
// gcd(9, 2);    // 1


gcdV2(12, 4);   // 4
gcdV2(15, 10);  // 5
gcdV2(9, 2);    // 1

console.log(gcdV3(12, gcdV3(4, 8)));  // 4
console.log(gcdV3(gcdV3(12, 4), 8));  // 4