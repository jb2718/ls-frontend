function numDigits(num){
	return(Math.floor(Math.log10(num)) + 1);
}

function leftPad(character, charSize, maxWidth) {
	var spaces = '';
	var finalStr = '';

	for (var i = 0; i <= (maxWidth - charSize); ++i) {
		spaces += ' ';
	}

	finalStr += spaces;
	finalStr += character;
	return finalStr;
}

function generatePattern(size) {
	var asterixCount = 0;
	var numCount = 0;
	var output = '';

	for (var row = 0; row < size; ++row){
		asterixCount = size - (row + 1);
		numCount = size - asterixCount;

		for (var i = 1; i <= numCount; ++i){
			output += String(i);
		}

		for (var i = 0; i < asterixCount; ++i){
			output += '*';
		}
		output += "\n";
	}
	console.log(output);
}

function generatePatternV2(size) {
	var asterixCount = 0;
	var numCount = 0;
	var output = '';

	for (var row = 0; row < size; ++row){
		asterixCount = size - (row + 1);
		numCount = size - asterixCount;

		for (var i = 1; i <= numCount; ++i){
			//skip padding on left-most column
			if (i === 1) {
				output += String(i);
			} else {
				output += leftPad(String(i), numDigits(i), numDigits(size));
			}
		}

		for (var i = 0; i < asterixCount; ++i){
			output += leftPad('*', 1, numDigits(size));
		}
		output += "\n";
	}
	console.log(output);
}


// generatePattern(7);
// generatePattern(9);
// generatePattern(10);

// generatePatternV2(9);
// generatePatternV2(10);
generatePatternV2(15);