import tinelLogo from '../assets/logo/tinel-workshop-logo.svg';
import shoppingCart from '../assets/icons/shopping-cart.svg';
import calendar from '../assets/icons/calendar.svg';
import clock from '../assets/icons/clock.svg';
import codeTagWhite from '../assets/icons/card-icons/code-white.svg';
import brushWhite from '../assets/icons/card-icons/brush-white.svg';
import flashWhite from '../assets/icons/card-icons/flash-white.svg';
import wireframeWhite from '../assets/icons/card-icons/wireframe-white.svg';
import brushDefault from '../assets/icons/filter-icons/brush.svg';
import codeTagDefault from '../assets/icons/filter-icons/code.svg';
import flashDefault from '../assets/icons/filter-icons/flash.svg';
import wireframeDefault from '../assets/icons/filter-icons/wireframe.svg';
import all from '../assets/icons/filter-icons/all.svg';

export { tinelLogo, shoppingCart, calendar, clock, all };

export const loadIconByCategory = (value) => {
	let categoryValue = value;

	if (categoryValue === 'design') {
		return brushWhite;
	} else if (categoryValue === 'frontend') {
		return wireframeWhite;
	} else if (categoryValue === 'backend') {
		return codeTagWhite;
	} else if (categoryValue === 'marketing') {
		return flashWhite;
	}
};

export const loadFilterIcons = (value) => {
	let filterValue = value;

	if (filterValue === 'design') {
		return brushDefault;
	} else if (filterValue === 'frontend') {
		return wireframeDefault;
	} else if (filterValue === 'backend') {
		return codeTagDefault;
	} else if (filterValue === 'marketing') {
		return flashDefault;
	}
};
