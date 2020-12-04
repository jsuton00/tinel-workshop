import React from 'react';
import CheckOutForm from '../components/CheckOutForm';
import '../styles/pages/checkoutPage.css';

export default function CheckoutPage(props) {
	const { buttonValue, closeCheckout } = props;
	return (
		<div id="checkout-page" className="checkout-page container-fluid">
			<div className="checkout-page-container row">
				<CheckOutForm
					closeButtonValue={buttonValue}
					closeHandler={closeCheckout}
				/>
			</div>
		</div>
	);
}
