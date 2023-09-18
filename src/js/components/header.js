
import { CLASSES, DOM } from '../helpers/consts';

const HEADER_BURGER_ACTIVE_CLASS = 'is-burger-open';
class Header {
	constructor() {
		this.el = DOM.header;
		this.burgerMenu = DOM.burgerMenu;
		this.isBurgerOpen = false;
	}

	init() {
		if (!header || !this.burgerMenu || !DOM.burgerBtn) {
			console.log('DOM not exist');
			return;
		}

		// initLangSelect();
		this.addListeners();
	}

	addListeners() {
		this.setDefaultBurgerClickEvent();
	}

	setDefaultBurgerClickEvent() {
		if (this.el && this.burgerMenu && DOM.burgerBtn) {
			DOM.burgerBtn.addEventListener('click', (e) => {
				e.preventDefault();

				if (this.isBurgerOpen) {
					this.closeBurgerMenu();
				}
				else {
					this.openBurgerMenu();
				}
			});
		}
	}

	openBurgerMenu() {
		this.burgerMenu.classList.add(CLASSES.open);
		DOM.burgerBtn.classList.add(CLASSES.active);
		this.el.classList.add(HEADER_BURGER_ACTIVE_CLASS);
		// TODO: need to make body fixed, should be done after choose custom scroll plugin
		this.isBurgerOpen = true;
	}

	closeBurgerMenu() {
		this.burgerMenu.classList.remove(CLASSES.open);
		DOM.burgerBtn.classList.remove(CLASSES.active);
		this.el.classList.remove(HEADER_BURGER_ACTIVE_CLASS);
		// TODO: need to make body not fixed, should be done after choose custom scroll plugin
		this.isBurgerOpen = false;
	}

}

const header = new Header();
export default header;
