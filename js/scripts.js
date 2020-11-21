// alert("Hello world!!");

checkbox = document.getElementById('switchBtn');
prices = document.querySelectorAll('.card');
// console.log(prices);

checkbox.addEventListener( 'change', function() {
	if(!this.checked) {
			// Checkbox is not checked = Monthly
			prices.forEach(logArrayElements);
	} else {
			// Checkbox is checked = Annually
			prices.forEach(logArrayElements);
	}
});

function logArrayElements(element, index, array) {
	element.children[1].classList.toggle('hidden');
	element.children[2].classList.toggle('hidden');
}
