import React, { useRef } from 'react';
import * as actions from '../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { inputNumberList } from '../utils/inputNumberList';
import { Link } from 'react-router-dom';

export default function CartItems(props) {
	const { itemId, cartItem } = props;

	const selectQuantityRef = useRef();
	const dispatch = useDispatch();
	const selectNum = useSelector((state) => state.selectNum);

	return (
		<div id={`cart-item-${itemId}`} className="cart-item-card card-mb-3">
			<div className="cart-item row no-gutters">
				<div className="cart-item-img-section col-md-4">
					<img
						src={cartItem.imageUrl}
						className="cart-item-img card-img"
						alt={cartItem.title}
					/>
				</div>
				<div className="cart-item-body-section col-md-8">
					<div className="cart-item-body card-body">
						<Link
							to={{
								pathname: `/workshop/:${itemId}`,
								workshopId: itemId,
							}}
						>
							<h5 className="cart-item-title workshop-title card-title">
								{cartItem.title}
							</h5>
						</Link>
						<div className="cart-item-price card-text">
							<div className="quantity-control">
								<select
									id="ticketNumber"
									ref={selectQuantityRef}
									name="ticketNumber"
									className="number-picker-input"
									value={selectNum}
									defaultValue={cartItem.quantity}
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
