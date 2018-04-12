function substr(string, start, length) {
  var newStr = '';
  var index = 0;

  if (start < 0){
  	index = string.length + start;
  } else {
  	index = start;
  }

  while (newStr.length < length){
  	if (index >= string.length) {
  		return newStr;
  	} else {
  		newStr += string[index];
  		index += 1;
  	}
  }
  return newStr;
}

var string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""