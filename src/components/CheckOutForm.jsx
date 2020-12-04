import React from 'react';
import '../styles/components/checkoutForm.css';

export default function CheckOutForm(props) {
	const { closeButtonValue, closeHandler } = props;
	return (
		<div id="checkout-form-container" className="checkout-form-container">
			<div className="checkout-form-header row">
				<h3 className="checkout-form-title">Checkout</h3>
				<div className="checkout-close-section">
					<button
						className="close-button"
						value={closeButtonValue}
						onClick={(e) => closeHandler(e.target.value)}
					>
						X
					</button>
				</div>
			</div>
			<div className="checkout-input-group form-group">
				<label htmlFor="firstName" className="label-row row">
					First Name
				</label>
				<input
					id="firstName"
					name="firstName"
					type="text"
					placeholder="Type your first name"
					required={true}
				/>
			</div>
		</div>
	);
}
