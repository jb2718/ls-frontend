function isAlpha(char) {
  var alphaRegEx = /[A-Za-z]/;
  return alphaRegEx.test(char);
}

function encodeChar(char) {
  var upperAMRegEx = /[A-M]/;
  var lowerAMRegEx = /[a-m]/;
  const OFFSET = 13;

  if (upperAMRegEx.test(char) || lowerAMRegEx.test(char)) {
    return String.fromCharCode(char.charCodeAt(0) + OFFSET);
  } else {
    return String.fromCharCode(char.charCodeAt(0) - OFFSET);
  }
}

function rot13(string) {
  var chars;
  var index;
  var encodedStr;

  chars = string.split('');
  encodedStr = '';

  for (index = 0; index < string.length; index += 1){
    if(isAlpha(chars[index])){
      encodedStr += encodeChar(chars[index]);
    } else {
      encodedStr += chars[index];
    }
  }

  return encodedStr;
}


console.log(rot13('alD43j*la')); 	// nyQ43w*yn


console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.


console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// logs:
// Teachers open the door, but you must enter by yourself.