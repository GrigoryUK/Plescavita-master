










export default function dropdownLink() {

	const dropdowns = document.querySelectorAll('.dropdown');
	const selectAll = document.querySelectorAll('.dropdown__select');
	const menuAll = document.querySelectorAll('.dropdown__menu');
	const caretAll = document.querySelectorAll('.dropdown__caret');
	const selectedAll = document.querySelectorAll('.dropdown__selected');
	const clickedAll = document.querySelectorAll('.dropdown__clicked');

	function dropdown(open, content, icon, select) {
		for (let i = 0; i < open.length; i++) {
			open[i].addEventListener("click", function () {
				content[i].classList.toggle("menu-open");
				icon[i].classList.toggle("caret-rorate");
				for (var j = 0; j < open.length; j++) {
					if (i != j) {
						content[j].classList.remove("menu-open");
						icon[j].classList.remove("caret-rorate");
					}
				}
			});
		}
	}

	

	

	if (dropdowns) {
		dropdown(selectAll, menuAll, caretAll, selectAll);
		dropdowns.forEach(dropdown => {
			const select = dropdown.querySelector('.dropdown__select');
			const caret = dropdown.querySelector('.dropdown__caret');
			const menu = dropdown.querySelector('.dropdown__menu');
			const options = dropdown.querySelectorAll('.dropdown__menu li');
			const selected = dropdown.querySelector('.dropdown__selected');
		
		
		
		
		
		
			select.addEventListener('click', () => {
		
				select.classList.toggle('select-clicked');
		
			});
		
		
		
		
			options.forEach(option => {
				option.addEventListener('click', () => {
					selected.value = option.innerText;
					
					select.classList.remove('select-clicked');
					caret.classList.remove('caret-rorate');
					menu.classList.remove('menu-open');
					caret.classList.add('active');
					select.classList.add('select-clicked');
					selected.classList.add('active');
					options.forEach(option => {
						option.classList.remove('active');
					});
		
					option.classList.add('active');
				});
		
		
		
			});
		
		});
	}

	
}


