import React from 'react';
import { formatDates, formatTime } from '../utils/formatDates';
import { loadIconByCategory } from '../utils/loadImages';
import { CalendarIcon, CardCategoryIcon, ClockIcon } from './Images';
import '../styles/components/workshopArticle.css';

export default function WorkshopArticle(props) {
	const { id, title, user, description, category, date } = props;
	return (
		<div id={`workshop-article-workshop${id}`} className="workshop-article">
			<div className="workshop-article-body">
				<p className="workshop-article-metadata row">
					<span className="category-article-icon">
						<CardCategoryIcon
							imgSrc={loadIconByCategory(category)}
							altName={category}
						/>
					</span>
					<span className="date-icon date-article-icon">
						<CalendarIcon />
					</span>
					{`${formatDates(date)}`}
					<span className="time-icon time-article-icon">
						<ClockIcon />
					</span>
					{`${formatTime(date)}`}
				</p>
				<h3 className="workshop-article-title row">{title}</h3>
				{user && (
					<p className="workshop-article-user row">
						<span className="with-user">with</span>
						{user.name}
					</p>
				)}
				<p className="workshop-article-description row">{description}</p>
			</div>
		</div>
	);
}
