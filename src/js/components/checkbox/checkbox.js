import { addClass, removeClass } from "../shared/helpers";


function checkboxAddress() {

}

function checkboxCart() {
	const container = document.querySelector('.cart__payment'); 

	if (container) {
		const checkboxes = container.querySelectorAll('.checkbox'); 
		const containerItems = container.querySelector('.cart__payment--row'); 
		const items = containerItems.querySelectorAll('.item')

		items.forEach(item => {
			item.addEventListener('click', el => {
				const radioBtn = item.querySelector('input[type="radio"]'); 
				radioBtn.click();
				items.forEach(item => {
					removeClass(item, 'item--active'); 
				})
				addClass(item, 'item--active'); 

			})
		})
		// checkboxes.forEach(checkbox => {
		// 	checkbox.addEventListener('click', el => {
				
		// 		const input = checkbox.querySelector('input');

		// 		if (input.checked) {
		// 			items.forEach(item => {
		// 				removeClass(item, 'item--active'); 
		// 			})
		// 			const item = checkbox.closest('.item'); 
		// 			addClass(item, 'item--active'); 

		// 		}
		// 	})
		// })
 
	}
}

export {
	checkboxCart,
	checkboxAddress
}