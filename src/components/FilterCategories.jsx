import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesList } from '../utils/categoriesList';
import * as actions from '../store/actions/index';
import '../styles/components/filterCategories.css';
import FilterItem from './FilterItem';

export default function FilterCategories() {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.categories);
	console.log(categories && categories);

	useEffect(() => {
		const timer = setTimeout(() => dispatch(actions.fetchCategories()));
		return () => {
			clearTimeout(timer);
		};
	}, [dispatch]);
	return (
		<div className="filter-categories-list list-group">
			<div
				className="filter-category default-category row"
				value={categoriesList[0]}
			>
				<p className="filter-category-text default-category-text">
					{categoriesList[0]}
				</p>
			</div>
			{categories.length > 0 &&
				categories
					.map((category, index) => {
						return (
							<FilterItem
								key={index}
								categoryValue={category}
								categoryText={category}
							/>
						);
					})
					.reverse()}
		</div>
	);
}
