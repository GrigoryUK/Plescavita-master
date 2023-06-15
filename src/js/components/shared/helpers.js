

const addClass = (item, cls) => {
	item.classList.add(cls)
}

const removeClass = (item, cls) => {
   item.classList.remove(cls)
}

const toggleClass = (item, cls) => {
	item.classList.toggle(cls)
 }
export {
	addClass,
	removeClass,
	toggleClass
}