function checkPassword(attempt) {
	if (attempt === 'athleticgreens') {
		return true;
	}
	return false;
}
var guessCount;
var guess;
var isCorrect;

guessCount = 0;
isCorrect = false;

while (guessCount < 3) {
	guess = prompt("What is the password: ");
	if (checkPassword(guess)) {
		isCorrect = true;
		break;
	}
	++guessCount;
}

if (isCorrect){
	console.log('You have successfully logged in.');
} else {
	console.log('You have been denied access.');	
}