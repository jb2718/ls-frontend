function substring(string, start, end) {
  var newStr = '';
  var index;
  var temp;

  // handle case where start or end are negative/non-integers
  if (typeof(start) !== 'number' || start < 0) {
  	start = 0;
  }

  // if (typeof(end) !== 'number' || end < 0) {
  // 	end = 0;
  // }

  // adjust the size of the search string indicies
  if (end === undefined){
  	index = start;
  	end = string.length;
  } else if (start > end) {
  	index = end;
  	end = start;
  } else {
  	index = start;
  }
  
  while (index < end){
  	// if index extends beyond length of orig string, return substring as is
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

// console.log(substring(string, 2, 4));    // "ll"
// console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, -1, 5));   // "hello"
// console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
// console.log(substring(string, 8, 20));   // "rld"
// console.log(substring(string, 12, 20));   // ""
// console.log(substring(string, 3, 3));   // ""





// I left off trying to satisfy the NaN condition