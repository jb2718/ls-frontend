function isPrime(num) {
	if ((num === 0 || num === 1) || num % 2 === 0) {
		return false;
	} 

	for (var i = 3; i < num; i += 2) {
		if (num % i === 0) {
			console.log("iteration val false: " + String(i))
			return false;
		}
	}
	return true;
}


console.log(isPrime(1));   // false
console.log('--------------------------');
console.log(isPrime(2));   // true
console.log('--------------------------');
console.log(isPrime(3));   // true
console.log('--------------------------');
console.log(isPrime(43));  // true
console.log('--------------------------');
console.log(isPrime(55));  // false
console.log('--------------------------');
console.log(isPrime(0));   // false
console.log('--------------------------');