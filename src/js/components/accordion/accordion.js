import Accordion from 'accordion-js';
import { addClass, removeClass, toggleClass } from '../shared/helpers';

function accordion() {
	const container = document.querySelector('.accordion-container'); 
	const containers = document.querySelectorAll('.ac');
	const buttons = document.querySelectorAll('.ac-trigger');
	const icons = document.querySelectorAll('.ac-caret-icon'); 

	if (container) {
		new Accordion('.accordion-container');	
		function toggleCaret(open, icon) {
			for (let i = 0; i < open.length; i++) {
				open[i].addEventListener("click", function () {
					icon[i].classList.toggle("caret-rorate");
					for (var j = 0; j < open.length; j++) {
						if (i != j) {
							icon[j].classList.remove("caret-rorate");
						}
					}
				});
			}
		}

		toggleCaret(buttons, icons)

		
	}
}

export {
	accordion
}