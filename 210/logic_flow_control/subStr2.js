function isValueNaN(value) {
  return typeof value === 'number' && isNaN(value);
}

function adjustStart(start, end, strLen) {
  // check if start is negative numeric value or NaN
  if (start < 0 || typeof(start) !== 'number' || isValueNaN(start)) {
    start = 0;
  } else if (start === end) {
    start = 0;
  } else if (start > strLen) {
    start = strLen;
  }
  return start;
}

function adjustEnd(start, end, strLen) {
  // check if end is negative numeric value or NaN
  if (end < 0 || typeof(end) !== 'number' || isValueNaN(end)) {
    end = 0;
  } else if (end === start) {
    end = 0;
  } else if (end > strLen) {
    end = strLen;
  }
  return end;
}

function substring(string, start, end) {
  var newStr = '';
  var newStart;
  var newEnd;
  var temp;

  if (end === undefined) {
    end = string.length;
  }

  // if start > end, swap values then
  // run through the rest of the checks
  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }

  newStart = adjustStart(start, end, string.length);
  newEnd = adjustEnd(start, end, string.length);

  while (newStart < newEnd) {
    newStr += string[newStart];
    newStart += 1;
  }

  return newStr;
}

var string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, -1, 5));   // "hello"
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
console.log(substring(string, 12, 20));   // ""
console.log(substring(string, 3, 3));   // ""