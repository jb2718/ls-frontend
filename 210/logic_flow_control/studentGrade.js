var grade;
var total;
var numGrades;
var letterGrade;
var average;

numGrades = 0;
grade = 0;
average = 0;
total = 0;

do {
	grade = prompt('Enter score ' + String(numGrades + 1) + ':');
	total += parseFloat(grade, 10);
	numGrades += 1;
} while (numGrades < 3)

average = total / numGrades;
console.log(average);

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