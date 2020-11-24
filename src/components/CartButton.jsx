import React from 'react';
import { ShoppingCartIcon } from './Images';
import '../styles/components/cartButton.css';

export const CartButton = () => {
	return (
		<button
			id="cart-button"
			name="cart-button"
			type="button"
			className="cart-button"
		>
			<span className="cart-button-icon">
				<ShoppingCartIcon />
				<span id="shopping-counter" className="shopping-counter">
					{0}
				</span>
			</span>
		</button>
	);
};
