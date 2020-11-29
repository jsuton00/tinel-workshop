import React from 'react';
import '../styles/components/bookingForm.css';
import { formatPrice } from '../utils/formatNumber';

export default function BookingForm(props) {
	const { price } = props;
	return (
		<div id="booking-form-box" className="booking-form-box">
			<h3 className="booking-form-tag row">Buy Your Ticket</h3>
			<p className="booking-form-price row">{`${formatPrice(price)} €`}</p>
			<form id="booking-form" className="booking-form row">
				<input
					id="ticketNumber"
					name="ticketNumber"
					type="number"
					min="0"
					className="number-picker-input"
				/>
				<button
					id="btnAdd2Cart"
					name="btnAdd2Cart"
					type="button"
					className="add-to-cart-button button"
				>
					Add to Cart
				</button>
			</form>
		</div>
	);
}
