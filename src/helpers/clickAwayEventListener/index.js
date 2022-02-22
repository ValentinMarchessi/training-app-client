//Event listener para detectar clicks fuera de algún elemento del DOM, útil para menus

export default function clickAwayEventListener(element, callback) {
    const handleClickAway = (event) => {
		if (!event.composedPath().includes(element)) {callback();}
	};
    document.addEventListener('click', handleClickAway);
}