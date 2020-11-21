// alert("Hello world!!");

checkbox = document.getElementById('switchBtn');

checkbox.addEventListener( 'change', function() {
	if(this.checked) {
			// Checkbox is checked..
			console.log('Checkbox is checked');
	} else {
			// Checkbox is not checked..
			console.log('Checkbox is not checked');
	}
});

