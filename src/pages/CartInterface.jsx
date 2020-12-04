import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartList from '../components/CartList';
import { ShoppingCartIcon } from '../components/Images';
import * as actions from '../store/actions/index';
import '../styles/pages/cartInterface.css';
import { formatSubtotal } from '../utils/formatNumber';
import CheckoutPage from './CheckoutPage';

export default function ShoppingCart(props) {
	const { closeButtonValue, closeCart, checkoutValue, openCheckout } = props;

	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cartItems);
	const total = useSelector((state) => state.total);

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(actions.fetchOrders());
		});

		return () => {
			clearTimeout(timer);
		};
	}, [dispatch]);

	const handleCloseCart = (e) => {
		return closeCart(e.target.value);
	};

	const handleOpenCheckOut = (e) => {
		openCheckout(e.target.value);
		closeCart(closeButtonValue);
	};
	return (
		<div id="shopping-cart" className="shopping-cart container-fluid">
			<div className="shopping-cart-body">
				<div className="shopping-cart-nav row">
					<div className="shopping-cart-nav-item cart-title">
						<h3 className="shopping-cart-title">
							<span className="shopping-cart-icon">
								<ShoppingCartIcon />
								<span
									id="shopping-counter"
									className="shopping-cart-counter"
								></span>
							</span>
							{cartItems.length > 0 ? cartItems.length : 0} Workshops
						</h3>
					</div>
					<div className="shopping-cart-nav-item close-button-section">
						<button
							id="close-button"
							name="close-button"
							type="button"
							className="close-button"
							value={closeButtonValue}
							onClick={handleCloseCart}
						>
							X
						</button>
					</div>
				</div>
				<div className="shopping-cart-main-wrapper">
					<div className="shopping-cart-list list-group">
						{cartItems && <CartList cartItems={cartItems} />}
					</div>
				</div>
				<div className="shopping-cart-total-section">
					<h5 className="shopping-cart-total-title row">Subtotal</h5>
					<p className="shopping-cart-total-number row">
						{total > 0 ? `${formatSubtotal(total)} €` : `${0} €`}
					</p>
				</div>
				<div className="checkout-button-row row">
					<button
						id="checkout-button"
						name="checkout-button"
						type="button"
						className="checkout-button"
						value={checkoutValue}
						onClick={handleOpenCheckOut}
					>
						Checkout
					</button>
				</div>
			</div>
		</div>
	);
}
