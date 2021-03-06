import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';
import FilterCategories from '../components/FilterCategories';
import { WorkShopCards } from '../components/WorkShopCards';
import '../styles/pages/workshopsListing.css';

export default function WorkshopsListing() {
	const dispatch = useDispatch();
	const workshops = useSelector((state) => state.filteredWorkshops);
	const workshopId = useSelector((state) => state.workshopId);

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(actions.fetchWorkshops());
			if (workshopId) {
				dispatch(actions.addToCart(workshopId));
			}
		});

		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, workshopId]);

	return (
		<div
			id="workshops-listing-page"
			className="workshops-listing-page container-fluid"
		>
			<div className="workshops-listing-container row">
				<div className="workshops-listing-col filter-section">
					<div className="workshops-filter-container row">
						<FilterCategories />
					</div>
				</div>
				{workshops && (
					<div className="workshops-listing-col card-section">
						<h3 className="workshops-listing-heading row">Workshops</h3>
						<p className="workshops-listings-total row">
							{workshops.length > 0 && `Displayed: ${workshops.length}`}
						</p>
						<div className="workshops-card-deck row">
							{workshops.length > 0 &&
								workshops
									.sort((a, b) => {
										return (
											new Date(a.date).getTime() - new Date(b.date).getTime()
										);
									})
									.map((workshop, index) => {
										return (
											<WorkShopCards
												key={index}
												workshopId={workshop.id}
												workshop={workshop}
												addToCart={() =>
													dispatch(actions.selectWorkshopId(workshop.id))
												}
											/>
										);
									})
									.reverse()}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
