import React from 'react';
import { shoppingCart, tinelLogo } from '../utils/loadImages';

export const TinelLogo = () => {
	return <img src={tinelLogo} alt="Tinel Workshop Web Store" />;
};

export const ShoppingCartIcon = () => {
	return <img src={shoppingCart} alt="Shopping Cart" />;
};
