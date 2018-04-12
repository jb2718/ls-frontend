function startsWith(string, searchString) {
  var count = 0;

  while (count < searchString.length) {
  	if( string[count] !== searchString[count]){
  		return false;
  	}
  	count += 1;
  }
  return true;
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false