import { addClass, removeClass } from "../shared/helpers";
import GraphTabs from 'graph-tabs';

function tabsCatalog() {
	const containerTabs = document.querySelector('.sectionTabs__buttons');

	if (containerTabs) {
		const buttons = containerTabs.querySelectorAll('button');
		buttons.forEach((button) => {
			button.addEventListener('click', (el) => {

				if (button.classList.contains('button-default-active')) {
					return;
				}
				buttons.forEach((button) => {
					removeClass(button, 'button-default-active')
				})
				addClass(button, 'button-default-active')
				TabsChange(button)
			});
		});
	}

	function TabsChange(button) {
		const container = document.querySelector('.sectionTabs');
		const blocks = container.querySelectorAll('.sectionTabs__block');
		const id = button.id;

		if (id === 'all') {
			blocks.forEach((block) => {
				removeClass(block, 'block-none')
				addClass(block, 'block-active')
			});
			return;
		}


		blocks.forEach((block) => {
			addClass(block, 'block-none')
		});

		blocks.forEach((block) => {
			const category = block.getAttribute('data-tab');
			console.log(category);

			if (category !== id) {
				removeClass(block, 'block-active')
				addClass(block, 'block-none')
			} else {
				removeClass(block, 'block-none')
				addClass(block, 'block-active')
			}

		});






	}

}

function tabsProfile() {
	const checkProfile = document.querySelector('.tabs-profile');
	const checkDelivery = document.querySelector('.tabs-delivery');
	const checkWay = document.querySelector('.tabs-way');
	if (checkProfile) {
		const tabsProfile = new GraphTabs('tabs-profile');
	}
	if (checkDelivery) {
		const tabsDelivery = new GraphTabsUK('tabs-delivery');
	}
	if (checkWay) {
		const tabsWay = new GraphTabs('tabs-way');
	}
}

export {
	tabsCatalog,
	tabsProfile
}

class GraphTabsUK { 
	constructor(selector, options) {
		let defaultOptions = {
			isChanged: () => { }
		}
		this.options = Object.assign(defaultOptions, options);
		this.selector = selector;
		this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
		if (this.tabs) {
			this.tabList = this.tabs.querySelector('.tabs__nav--custom');
			this.tabsBtns = this.tabList.querySelectorAll('.tabs__nav-btn');
			this.tabsPanels = this.tabs.querySelectorAll('.tabs__panel--custom');
		} else {
			console.error('Селектор data-tabs не существует!');
			return;
		}

		this.check();
		this.init();
		this.events();
	}

	check() {
		if (document.querySelectorAll(`[data-tabs="${this.selector}"]`).length > 1) {
			console.error('Количество элементов с одинаковым data-tabs больше одного!');
			return;
		}

		if (this.tabsBtns.length !== this.tabsPanels.length) {
			console.error('Количество кнопок и элементов табов не совпадает!');
			return;
		}
	}

	init() {
		this.tabList.setAttribute('role', 'tablist');

		this.tabsBtns.forEach((el, i) => {
			el.setAttribute('role', 'tab');
			el.setAttribute('tabindex', '-1');
			el.setAttribute('id', `${this.selector}${i + 1}`);
			el.classList.remove('tabs__nav-btn--active');
		});

		this.tabsPanels.forEach((el, i) => {
			el.setAttribute('role', 'tabpanel');
			el.setAttribute('tabindex', '-1');
			el.setAttribute('aria-labelledby', this.tabsBtns[i].id);
			el.classList.remove('tabs__panel--active');
		});

		this.tabsBtns[0].classList.add('tabs__nav-btn--active');
		this.tabsBtns[0].removeAttribute('tabindex');
		this.tabsBtns[0].setAttribute('aria-selected', 'true');
		this.tabsPanels[0].classList.add('tabs__panel--active');
	}

	events() {
		this.tabsBtns.forEach((el, i) => {
			el.addEventListener('click', (e) => {
				let currentTab = this.tabList.querySelector('[aria-selected]');

				if (e.currentTarget !== currentTab) {
					this.switchTabs(e.currentTarget, currentTab);
				}
			});

			el.addEventListener('keydown', (e) => {
				let index = Array.prototype.indexOf.call(this.tabsBtns, e.currentTarget);

				let dir = null;

				if (e.which === 37) {
					dir = index - 1;
				} else if (e.which === 39) {
					dir = index + 1;
				} else if (e.which === 40) {
					dir = 'down';
				} else {
					dir = null;
				}

				if (dir !== null) {
					if (dir === 'down') {
						this.tabsPanels[i].focus();
					} else if (this.tabsBtns[dir]) {
						this.switchTabs(this.tabsBtns[dir], e.currentTarget);
					}
				}
			});
		});
	}

	switchTabs(newTab, oldTab = this.tabs.querySelector('[aria-selected]')) {
		newTab.focus();
		newTab.removeAttribute('tabindex');
		newTab.setAttribute('aria-selected', 'true');

		oldTab.removeAttribute('aria-selected');
		oldTab.setAttribute('tabindex', '-1');

		let index = Array.prototype.indexOf.call(this.tabsBtns, newTab);
		let oldIndex = Array.prototype.indexOf.call(this.tabsBtns, oldTab);

		this.tabsPanels[oldIndex].classList.remove('tabs__panel--active');
		this.tabsPanels[index].classList.add('tabs__panel--active');

		this.tabsBtns[oldIndex].classList.remove('tabs__nav-btn--active');
		this.tabsBtns[index].classList.add('tabs__nav-btn--active');

		this.options.isChanged(this);
	}
}