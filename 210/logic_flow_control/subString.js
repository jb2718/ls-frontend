function indexOf(firstStr, secondStr) {
	var isMatch = true;

	for(var i = 0; i < firstStr.length; ++i){
		// check to see if first char of substring matches char at index i
		if (firstStr[i] === secondStr[0]){
			for(var j = 0; j < secondStr.length; ++j){
				if(firstStr[i + j] !== secondStr[j]) {
					isMatch = false;
					break;
				}
			}
			
			if (isMatch) {
				return i;
			}
		}
	}
	return -1;
}

function lastIndexOf(firstStr, secondStr) {
	var isMatch = true;

	for(var i = (firstStr.length - 1); i >= 0; --i){
		// check to see if first char of substring matches char at index i
		if (firstStr[i] === secondStr[0]){
			for(var j = 0; j < secondStr.length; ++j){
				if(firstStr[i + j] !== secondStr[j]) {
					isMatch = false;
					break;
				}
			}
			
			if (isMatch) {
				return i;
			}
		}
	}
	return -1;
}

function reverseStr(str){
	var count = str.length - 1;
	var reversedStr = '';
	while (count >= 0) {
		reversedStr += str[count];
		count -= 1;
	}
	return reversedStr;
}


function lastIndexOfV2(firstStr, secondStr) {
	var reversedFirstStr;
	var reversedSecondStr;
	var index;
	var indexStart;

	// reverse strings
	reversedFirstStr = reverseStr(firstStr);
	reversedSecondStr = reverseStr(secondStr);

	index = indexOf(reversedFirstStr, reversedSecondStr);

	if (index < 0){
		return index;
	} else {
		// Get index of start of secondStr in reversed word
		indexStart = index + (secondStr.length - 1);

		// Convert index of reversed string to regular string
		return ((firstStr.length - 1) - indexStart); 
	}
}


console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log('-----lastIndexOf-----')

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1

console.log('-----lastIndexOfV2-----')

console.log(lastIndexOfV2('Some strings', 's'));                  // 11
console.log(lastIndexOfV2('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOfV2('Blue Whale, Killer Whale', 'all'));    // -1