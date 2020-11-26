import React from 'react';
import { formatDates, formatTime } from '../utils/formatDates';
import '../styles/components/workshopCards.css';
import { CalendarIcon, CardCategoryIcon, ClockIcon } from './Images';
import { formatPrice } from '../utils/formatNumber';
import { loadIconByCategory } from '../utils/loadImages';

export default function WorkShopCards(props) {
	const { workshopId, workshop } = props;
	console.log(workshop);
	return (
		<div id={workshopId} className="workshop-card card">
			<div className="card-img-container card-img-top">
				<img
					src={workshop.imageUrl}
					alt={workshop.title}
					className="workshop-card-img"
				/>
			</div>
			<div className="workshop-card-body card-body">
				<p className="workshop-date-time card-text">
					<span className="date-icon">
						<CalendarIcon />
					</span>
					{`${formatDates(workshop.date)}`}
					<span className="time-icon">
						<ClockIcon />
					</span>
					{`${formatTime(workshop.date)}`}
					<span className="category-icon">
						<CardCategoryIcon
							imgSrc={loadIconByCategory(workshop.category)}
							altName={workshop.category}
						/>
					</span>
				</p>
				<h5 className="workshop-title card-title">{workshop.title}</h5>
				<p className="workshop-price card-text">{`${formatPrice(
					workshop.price,
				)} €`}</p>
			</div>
			<div className="workshop-card-footer card-footer">
				<div className="workshop-cart-button card-text">
					<button
						id="btnAdd2Cart"
						name="btnAdd2Cart"
						type="button"
						className="add-to-cart-button button"
						value={workshopId}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}
