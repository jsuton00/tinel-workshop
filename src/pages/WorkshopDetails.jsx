import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookingForm from '../components/BookingForm';
import { DetailBannerImage } from '../components/Images';
import WorkshopArticle from '../components/WorkshopArticle';
import * as actions from '../store/actions/index';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import '../styles/pages/workshopDetails.css';
import { useHistory } from 'react-router';

const WorkshopDetails = (props) => {
	let { location } = props;
	let history = useHistory();
	const dispatch = useDispatch();
	const workshop = useSelector((state) => state.selectedWorkshop);
	const selectedUser = useSelector((state) => state.selectedUser);
	let workshopId = location.workshopId;

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(actions.fetchWorkshop(workshopId));
			if (workshop) {
				dispatch(actions.fetchUser(workshop.userId));
			}
		}, 100);
		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, workshop, workshopId]);

	return (
		<div
			id="workshop-details-page"
			className="workshop-details container-fluid"
		>
			<div className="workshop-details-container row">
				<div className="workshop-details-col return-section">
					<div className="return-button-container row">
						<button
							id="return-button"
							name="return-button"
							type="button"
							className="return-button"
							onClick={(e) => history.push('/')}
						>
							<span className="return-icon">
								<FaLongArrowAltLeft />
							</span>
							Return
						</button>
					</div>
				</div>
				<div className="workshop-details-col workshop-article-section">
					<div className="workshop-article-image-container row">
						{workshop && (
							<DetailBannerImage
								imgSrc={workshop.imageUrl}
								altName={workshop.title}
							/>
						)}
					</div>
					<div className="article-section-row row">
						{workshop && (
							<WorkshopArticle
								id={workshop.id}
								title={workshop.title}
								user={selectedUser}
								description={workshop.desc}
								category={workshop.category}
								date={workshop.date}
							/>
						)}
						{workshop && <BookingForm price={workshop.price} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkshopDetails;
