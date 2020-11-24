import React from 'react';
import { CartButton } from './CartButton';
import { TinelLogo } from './Images';
import '../styles/components/header.css';

export default function Header() {
	return (
		<header id="header" className="header container-fluid">
			<nav className="nav header-nav row">
				<div className="nav-item brand-item">
					<div className="brand-logo row">
						<TinelLogo />
					</div>
				</div>
				<div className="nav-item cart-item">
					<div className="cart-button-section row">
						<CartButton />
					</div>
				</div>
			</nav>
		</header>
	);
}
