function lowerChar(char) {
	// assuming input is always of type string
	if (char.charCodeAt(0) < 65 || char.charCodeAt(0) > 90) {
		return char;
	} else {
		return String.fromCharCode(char.charCodeAt(0) + 32);
	}
}

function toLowerCase(string) {
	var newStr = '';
	var count = 0;

	while (count < string.length) {
		newStr += lowerChar(string[count]);
		count += 1;
	}

	return newStr;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"