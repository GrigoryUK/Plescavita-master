



export default function counterPrice() {
	const containers = document.querySelectorAll('.counter-container');

	if (containers) {
		containers.forEach(container => {
			const btnPlus = container.querySelector('.btn-counter-plus')
			const btnMinus = container.querySelector('.btn-counter-minus')
			const counterPrice = container.querySelector('.counter-price span')
			const counterNum = container.querySelector('.counter-num');
			const iConst = Number(counterNum.textContent.trim());
			const priceConst = Number(counterPrice.firstChild.textContent.trim());
			const priceMain = priceConst / iConst;

			btnPlus.addEventListener('click', el => {
				let i = Number(counterNum.textContent.trim());
				
				console.log(priceMain);
				i += 1;
				counterNum.textContent = i;
				counterPrice.firstChild.textContent = priceMain * i;

			})

			btnMinus.addEventListener('click', el => {
				let i = Number(counterNum.textContent.trim());
				if (i <= 1) {
					return;
				}
				i -= 1;

				counterNum.textContent = i;
				counterPrice.firstChild.textContent = priceMain * i;
			})
		})

	}
}