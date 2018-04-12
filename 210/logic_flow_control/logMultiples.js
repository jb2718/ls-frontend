function logMultiples(num) {
	for (var i = 100; i >= 0; --i) {
		if (i % num === 0 && i % 2 === 1) {
			console.log(String(i));
		}
	}
}

function logMultiplesV2(num) {
	var maxMultiple = Math.floor(100 / num) * num;
	var i;
	for (i = maxMultiple; i > 0; i -= num) {
		if (i % 2 === 1) {
			console.log(String(i));
		}
	}
}

// logMultiples(17);
logMultiplesV2(21);