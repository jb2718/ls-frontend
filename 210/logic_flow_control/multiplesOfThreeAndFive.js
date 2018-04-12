function multiples() {
	for (var i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log(String(i) + '!');
		} else if (i % 3 === 0 || i % 5 === 0){
			console.log(i);
		}
	}
}

function multiplesV2(start, end) {
	for (var i = start; i <= end; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log(String(i) + '!');
		} else if (i % 3 === 0 || i % 5 === 0){
			console.log(i);
		}
	}
}


// multiples();

multiplesV2(5, 30);