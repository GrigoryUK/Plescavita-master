

export default function profileData() {
	const container = document.querySelector('.profileData'); 

	if (container) {
		const inputContainers = container.querySelectorAll('.inputComponent'); 
		const btnSave = container.querySelector('.buttonComponent'); 
		inputContainers.forEach(inputContainer => {
			const btnEdit = inputContainer.querySelector('.btn-edit');
			console.log(btnEdit); 
			btnEdit.addEventListener('click', el => {
				const input = inputContainer.querySelector('input'); 
				input.removeAttribute('readonly', 'readonly');
				input.style.backgroundColor = `var(--primary5)`;
				input.focus(); 
				btnSave.removeAttribute('disabled', 'disabled');
			})
		})

		btnSave.addEventListener('click', el => {
			inputContainers.forEach(inputContainer => {
				const input = inputContainer.querySelector('input'); 
				input.style.backgroundColor = `var(--primary6)`;
				input.setAttribute('readonly', 'readonly')
			})

			btnSave.setAttribute('disabled', 'disabled');
		})
	}
}