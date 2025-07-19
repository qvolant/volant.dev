const _root = document.querySelector(':root');

document.addEventListener("htmx:load", function() {
	setRandomColor();
	const menuButton = document.getElementById('menu-button');
	const sidebarNav = document.querySelector('#sidebar nav');
	const sidebarFooter = document.querySelector('#sidebar footer');
	let isMenuHidden = true;
	menuButton.addEventListener('click', function() {
		sidebarNav.style.height = isMenuHidden ? 'auto' : '0';
		sidebarFooter.style.height = isMenuHidden ? 'auto' : '0';
		isMenuHidden = !isMenuHidden;
		if (isMenuHidden) {
			menuButton.classList.remove('is-open');
		} else {
			menuButton.classList.add('is-open');
		}
	})
});

function setRandomColor() {
	let hue = Math.floor(360 * Math.random());
	_root.style.setProperty('--main-color', 'hsl(' + hue + ', 50%, 75%)');
	_root.style.setProperty('--main-color-darker', 'hsl(' + hue + ', 50%, 55%)');
}
