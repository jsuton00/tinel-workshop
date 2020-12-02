import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';
import FilterCategories from '../components/FilterCategories';
import { WorkShopCards } from '../components/WorkShopCards';
import '../styles/pages/workshopsListing.css';

export default function WorkshopsListing() {
	const dispatch = useDispatch();
	const workshops = useSelector((state) => state.filteredWorkshops);
	const productsProp = useSelector((state) => state.products);
	const totalProp = useSelector((state) => state.total);

	useEffect(() => {
		const timerGetWorkshops = setTimeout(() => {
			return dispatch(actions.fetchWorkshops());
		});

		const timerPostOrders = setTimeout(() => {
			let products;
			let total;

			if (productsProp) {
				products =
					productsProp.length > 0 &&
					productsProp.map((product) => {
						return product;
					});
			}

			if (totalProp) {
				total = totalProp;
			}

			dispatch(actions.postOrders(products, total));
		});

		return () => {
			clearTimeout(timerGetWorkshops);
			clearTimeout(timerPostOrders);
		};
	}, [dispatch, productsProp, totalProp]);

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
