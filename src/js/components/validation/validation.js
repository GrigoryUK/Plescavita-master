import { validateForms, } from "../../functions/validate-forms";
import { addClass, removeClass } from "../shared/helpers";

import { gsap } from "gsap";

function maskPhone() {
	let tel = document.querySelectorAll('input[type="tel"]');
	let telMask = new Inputmask("+7 (999) 999-99-99");

	telMask.mask(tel);

	let code = document.querySelectorAll('input[type="code"]');
	let codeMask = new Inputmask("9{*}");
	codeMask.mask(code);

	let email = document.querySelectorAll('input[name="email"]');
	let emailMask = new Inputmask({
		mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
	});
	emailMask.mask(email);

}



function validateLogin() {
	const form = document.querySelector('.form-login'); 

	if (form) {
		const containerOne = form.querySelector('.part-1');
		const containerTwo = form.querySelector('.part-2');
		const buttonOne = containerOne.querySelector('button');
		const buttonTwo = containerTwo.querySelector('button');
	
		buttonsChecks(buttonOne, containerOne, buttonTwo, containerTwo);
	}
	
}



function validateRegister() {
	const form = document.querySelector('.form-register');

	if (form) {
		const containerOne = form.querySelector('.part-1');
		const containerTwo = form.querySelector('.part-2');
		const buttonOne = containerOne.querySelector('button');
		const buttonTwo = containerTwo.querySelector('button');
		buttonsChecks(buttonOne, containerOne, buttonTwo, containerTwo);
	}
	

}

const buttonsChecks = (buttonOne, containerOne, buttonTwo, containerTwo) => {

	buttonOne.addEventListener('click', el => {
		const phone = checkValue(containerOne, 'input[type="tel"]')

		if (phone === true) {
			success(containerOne, containerTwo)
		}

		


	})

	buttonTwo.addEventListener('click', el => {
		const code = checkValue(containerTwo, 'input[type="code"]')

		if (code === true) {
			console.log('успешно');
		}
	})

}

const success = (cont1, cont2) => {
	const tl = gsap.timeline({});
	tl.to(cont1, 0.3, { opacity: 0, visibility: 'hidden' })
		.to(cont2, 0.5, { top: 0 })
}

function checkValue(container, item) {
	let input = container.querySelector(item);


	if (input.value !== "") {
		removeClass(input, 'warning')
		return true;
	} else {
		addClass(input, 'warning')
	}
}

function checkFinal(...args) {
	function isTrue(element) {
		return element === true;
	}
	let result = args.every(isTrue);

	return result;
}

export {
	validateRegister,
	validateLogin,
	maskPhone
}