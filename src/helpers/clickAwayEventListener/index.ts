//Event listeners para detectar clicks fuera de algún elemento del DOM, útil para menus

function clickAwayEventListener(element: Element, callback: Function) {
	const elementName = element.name || element.id || element.className || element.tagName;
	let onFocus = false;
	const handleClickAway = (event: Event) => {
		if (element.contains(event.target)) {
			// console.log(`${elementName} on focus.`);
			onFocus = true;
		}
		if (!event.composedPath().includes(element) && onFocus) {
			// console.log(`${elementName} lost focus, triggering callback.`);
			element.value ? callback(element.value) : callback();
			onFocus = !onFocus;
		}
	};
	// console.log(`Adding clickAwayEventListener on ${elementName}.`);
	document.addEventListener(`click`, handleClickAway);

	return () => {
		// console.log(`Removing clickAwayEventListener on ${elementName}.`);
		document.removeEventListener(`click`, handleClickAway);
	};
}

function hideOnClickOutside(element: Node | Element, callback: Function) {
	const outsideClickListener = (event: Event) => {
		if (!element.contains(event.target) && isVisible(element)) {
			// or use: event.target.closest(selector) === null
			callback();
			removeClickListener();
		}
	};

	const removeClickListener = () => {
		document.removeEventListener('click', outsideClickListener);
	};

	document.addEventListener('click', outsideClickListener);
}

const isVisible = (elem) => !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length); // source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js

export { clickAwayEventListener, hideOnClickOutside };