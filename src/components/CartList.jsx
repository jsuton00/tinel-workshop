import React from 'react';
import CartItems from './CartItems';
import '../styles/components/cartList.css';

export default function CartList(props) {
	const { cartItems } = props;
	console.log(cartItems);

	return (
		<>
			{cartItems &&
				cartItems.length > 0 &&
				cartItems.map((item, index) => {
					return <CartItems key={index} itemId={item.id} cartItem={item} />;
				})}
		</>
	);
}
