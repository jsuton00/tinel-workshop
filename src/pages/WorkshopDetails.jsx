import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';

const WorkshopDetails = (props) => {
	let { location } = props;
	const dispatch = useDispatch();
	const workshop = useSelector((state) => state.selectedWorkshop);
	const users = useSelector((state) => state.selectedUsers);
	let workshopId = location.workshopId;

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(actions.fetchWorkshop(workshopId));
			dispatch(actions.fetchUsers());
		}, 100);
		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, workshopId]);

	console.log(workshop && workshop);
	console.log(users && users);
	return <div></div>;
};

export default WorkshopDetails;
