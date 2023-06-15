import { addClass, removeClass } from "../shared/helpers";

export default function addAddress() {
	
	const btnAdd = document.querySelector('.button-add-address');
	if (btnAdd) {
		const container = document.querySelector('.adresses');
		const li = container.querySelector('.li-add-address');
		const btnSave = li.querySelector('.btn-adresses');

		btnAdd.addEventListener('click', el => {

			removeClass(li, 'display-none');
			addClass(btnAdd, 'display-none');

		});

		btnSave.addEventListener('click', el => {

			removeClass(btnAdd, 'display-none');
			addClass(li, 'display-none');

		});


	}
}