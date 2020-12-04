import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';
import '../styles/components/bookingForm.css';
import { formatSubtotal } from '../utils/formatNumber';
import { inputNumberList } from '../utils/inputNumberList';

export default function BookingForm(props) {
	const {
		buttonValue,
		workshopId,
		selectedQuantity,
		selectQuantity,
		addToCart,
	} = props;

	const selectNumberRef = useRef();
	const addToCartFormRef = useRef();
	const dispatch = useDispatch();
	const selectNum = useSelector((state) => state.selectedNum);
	const subtotal = useSelector((state) => state.subtotal);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (selectedQuantity === selectNumberRef.current.value) {
				dispatch(actions.selectNumberOfTickets(selectedQuantity));
			}
		}, 100);

		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, selectNum, selectedQuantity, workshopId]);

	return (
		<form ref={addToCartFormRef} id="booking-form" className="booking-form row">
			<div className="input-section">
				<select
					id="ticketNumber"
					ref={selectNumberRef}
					name="ticketNumber"
					className="number-picker-input"
					value={selectedQuantity}
					onChange={(e) => selectQuantity(e.target.value)}
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
					ref={addToCartFormRef}
					id="btnAdd2Cart"
					name="btnAdd2Cart"
					type="button"
					className="add-to-cart-button button"
					value={buttonValue}
					onClick={(e) => {
						addToCart(e.target.value, selectedQuantity);
					}}
				>
					Add to Cart
				</button>
				<small className="booking-form-subtotal row">
					{subtotal > 0 ? `Subtotal: ${formatSubtotal(subtotal)} €` : ``}
				</small>
			</div>
		</form>
	);
}
