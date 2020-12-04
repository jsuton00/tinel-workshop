import React from 'react';
import { CalendarIcon, CardCategoryIcon, ClockIcon } from './Images';
import { formatDates, formatTime } from '../utils/formatDates';
import { formatPrice } from '../utils/formatNumber';
import { loadIconByCategory } from '../utils/loadImages';
import '../styles/components/workshopCards.css';
import { Link } from 'react-router-dom';

export const WorkShopCards = (props) => {
	const { workshopId, workshop, addToCart } = props;
	console.log(workshop);

	return (
		<div className="workshop-card card">
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
				<Link
					to={{
						pathname: `/workshop/:${workshopId}`,
						workshopId: workshopId,
					}}
				>
					<h5 className="workshop-title card-title">{workshop.title}</h5>
				</Link>
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
						onClick={(e) => addToCart(e.target.value)}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};
