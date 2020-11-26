import React from 'react';
import { calendar, clock, shoppingCart, tinelLogo } from '../utils/loadImages';

export const TinelLogo = () => {
	return <img src={tinelLogo} alt="Tinel Workshop Web Store" />;
};

export const ShoppingCartIcon = () => {
	return <img src={shoppingCart} alt="Shopping Cart" />;
};

export const CalendarIcon = () => {
	return <img src={calendar} alt="Calendar" />;
};

export const ClockIcon = () => {
	return <img src={clock} alt="Clock" />;
};

export const CardCategoryIcon = (props) => {
	const { imgSrc, altName } = props;
	return <img src={imgSrc} alt={altName} />;
};

export const FilterCategoryIcon = (props) => {
	const { imgSrc, altText } = props;
	return <img src={imgSrc} alt={altText} />;
};
