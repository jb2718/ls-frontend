function average(numScores) {
	var count = 0;
	var total = 0;
	var grade = '';
	
	do {
		grade = prompt('Enter score ' + String(count + 1) + ':');
		total += parseFloat(grade, 10);
		count += 1;
	} while (count < numScores)

	return (total / numScores);
}

var letterGrade;
var average;
var numGrades;

numGrades = prompt('How many grades will you enter?: ');

average = average(parseInt(numGrades, 10));

if (average >= 90) {
	letterGrade = 'A';
} else if (average >= 70 && average < 90) {
	letterGrade = 'B';
} else if (average >= 50 && average < 70) {
	letterGrade = 'C';
} else {
	letterGrade = 'F';
}

console.log('Based on the average of your ' + numGrades + ' scores your letter grade is "'+ letterGrade + '".');