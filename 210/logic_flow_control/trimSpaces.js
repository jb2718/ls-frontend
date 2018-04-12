function reverseStr(str){
	var count = str.length - 1;
	var reversedStr = '';
	while (count >= 0) {
		reversedStr += str[count];
		count -= 1;
	}
	return reversedStr;
}

function indexTextBegin(str) {
	var count = 0;
	var index;

	while(count < str.length) {
		if (str[count] !== ' ') {
			return count;
		}

		count += 1;
	}
	return -1;
}

function trimLeadingSpaces(str, idx){
	var count = idx;
	var trimmedStr = '';

	if (idx === -1) {return trimmedStr;}


	while (count < str.length) {
		trimmedStr += str[count];
		count += 1;
	}
	return trimmedStr;
}

function trim(str) {
	var trimmedStr = '';
	var count = 0;
	var textStart = 0;
	var textEnd = 0;
	var reversedStr = '';

	// Get index of start of text and trim
	textStart = indexTextBegin(str);
	trimmedStr = trimLeadingSpaces(str, textStart);

	// Get index of end of text and trim
	reversedStr = reverseStr(trimmedStr);
	textEnd = indexTextBegin(reversedStr);
	trimmedStr = reverseStr(trimLeadingSpaces(reversedStr, textEnd));

	// return trimmedStr;
	return trimmedStr;
}


console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""