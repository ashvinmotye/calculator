var left = document.getElementById('left-number');
var right = document.getElementById('right-number');
var result = document.getElementById('result');


// form numbers by clicking on number pad
function addLeft(x) {
	left.innerHTML += x;
}

function addRight(x) {
	right.innerHTML += x;
}

function operator(a) {
	if(a == '+') {
		result.innerHTML = Number(left.innerHTML) + Number(right.innerHTML);
	}
	if(a == '-') {
		result.innerHTML = Number(left.innerHTML) - Number(right.innerHTML);
	}
	if(a == '*') {
		result.innerHTML = Number(left.innerHTML) * Number(right.innerHTML);
	}
	if(a == '/') {
		result.innerHTML = Math.floor(Number(left.innerHTML) / Number(right.innerHTML));
	}
	if(a == '%') {
		result.innerHTML = Number(left.innerHTML) % Number(right.innerHTML);
	}
}

function clearResult() {
	left.innerHTML = '';
	right.innerHTML = '';
	result.innerHTML = "000";
}