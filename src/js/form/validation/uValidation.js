export function validateEmail( email ) {
	const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	return regex.test( email );
}


// Inputs validation custom check
export function inputsValidation() {

	const errorText = {
		name: "Name is required",
		phone: "Phone number is required",
	}

	const selectorsArray = [arguments] || [
		'input[name="name"]', 
		'input[name="phone"]'
	]

	// Form inputs validation check
	const  inputs = document.querySelectorAll(selectorsArray);
	
	// Iterate thru node list and add event listener
	[...inputs].forEach(input => {

		input.addEventListener('input', function(e) {
			input.setCustomValidity('')
			input.classList.remove("valid")
			
			if(e.target.value !== '' ) {

				if(input.checkValidity()) {
					input.classList.add("valid")
				}
				if(e.target.value && !input.checkValidity()) {
					input.classList.remove("valid")
					input.setCustomValidity(errorText[`${input.name}`])
				}

				}
		})
	})
}
