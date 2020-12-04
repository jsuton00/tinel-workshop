import React from 'react';
import { ShoppingCartIcon } from './Images';
import '../styles/components/cartButton.css';
import { useSelector } from 'react-redux';

export const CartButton = (props) => {
	const { buttonValue, openCart } = props;
	const cartItems = useSelector((state) => state.cartItems);
	return (
		<button
			id="cart-button"
			name="cart-button"
			type="button"
			className="cart-button"
			value={buttonValue}
			onClick={(e) => openCart(e.target.value)}
		>
			<span className="cart-button-icon">
				<ShoppingCartIcon />
				<span id="shopping-counter" className="shopping-counter">
					{cartItems.length > 0 ? cartItems.length : 0}
				</span>
			</span>
		</button>
	);
};
