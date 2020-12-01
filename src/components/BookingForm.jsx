import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';
import '../styles/components/bookingForm.css';
import { formatPrice, formatSubtotal } from '../utils/formatNumber';
import { inputNumberList } from '../utils/inputNumberList';

export default function BookingForm(props) {
	const { price } = props;

	const selectNumberRef = useRef();
	const dispatch = useDispatch();
	const selectNum = useSelector((state) => state.selectedNum);
	const subtotal = useSelector((state) => state.subtotal);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (selectNum === selectNumberRef.current.value) {
				dispatch(actions.selectNumberOfTickets(selectNum));
			}
		}, 100);
		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, selectNum]);

	return (
		<div id="booking-form-box" className="booking-form-box">
			<div className="booking-form-body">
				<h3 className="booking-form-tag row">Buy Your Ticket</h3>
				<p className="booking-form-price row">{`${formatPrice(price)} €`}</p>
				<form id="booking-form" className="booking-form row">
					<div className="input-section">
						<select
							id="ticketNumber"
							ref={selectNumberRef}
							name="ticketNumber"
							className="number-picker-input"
							value={selectNum}
							onChange={(e) =>
								dispatch(actions.selectNumberOfTickets(e.target.value))
							}
						>
							{inputNumberList.length > 0 &&
								inputNumberList.map((num, index) => {
									return (
										<option key={index} value={num}>
											{num}
										</option>
									);
								})}
						</select>
					</div>
					<div className="button-section">
						<button
							id="btnAdd2Cart"
							name="btnAdd2Cart"
							type="button"
							className="add-to-cart-button button"
						>
							Add to Cart
						</button>
						<small className="booking-form-subtotal row">
							{subtotal > 0 ? `Subtotal: ${formatSubtotal(subtotal)} €` : ``}
						</small>
					</div>
				</form>
			</div>
		</div>
	);
}
