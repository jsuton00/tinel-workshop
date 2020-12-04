import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CartButton } from './CartButton';
import { TinelLogo } from './Images';
import '../styles/components/header.css';
import { Link } from 'react-router-dom';
import ShoppingCart from '../pages/CartInterface';

export default function Header() {
	const cartList = useSelector((state) => state.cartList);

	const [cartMenu, setCartMenu] = useState(false);
	const openShoppingCart = () => {
		setCartMenu(!cartMenu);
	};
	const closeShoppingCart = () => {
		if (cartMenu === true) {
			setCartMenu(false);
		}
	};
	return (
		<header id="header" className="header container-fluid">
			<nav className="nav header-nav row">
				<div className="nav-item brand-item">
					<div className="brand-logo row">
						<Link to="/">
							<TinelLogo />
						</Link>
					</div>
				</div>
				<div className="nav-item cart-item">
					<div className="cart-button-section row">
						<CartButton
							cartList={cartList && cartList}
							buttonValue={cartMenu}
							openCart={openShoppingCart}
						/>
					</div>
				</div>
			</nav>
			{cartMenu === true ? (
				<ShoppingCart
					closeButtonValue={cartMenu}
					closeCart={closeShoppingCart}
				/>
			) : (
				''
			)}
		</header>
	);
}
