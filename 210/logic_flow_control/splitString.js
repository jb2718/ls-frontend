function splitString(string, delimiter) {
	var count = 0;
	var newStr = '';
	if (delimiter === null || delimiter === undefined) { 
		console.log('ERROR: No delimiter');
		return;
	}
  
  while (count < string.length) {
  	if (delimiter === '') {
  		newStr += (string[count] + '\n')
  	} else if (string[count] === delimiter) {
  		newStr += '\n';
  	} else {
  		newStr += string[count];
  	}
  	count += 1;
  }

  console.log(newStr);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello