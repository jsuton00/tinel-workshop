import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';
import FilterItem from './FilterItem';
import { categoriesList } from '../utils/categoriesList';
import '../styles/components/filterCategories.css';

export default function FilterCategories() {
	const filterCategoriesRef = useRef();
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.categories);
	const filterCategory = useSelector((state) => state.selectedCategory);
	console.log(categories && categories);

	useEffect(() => {
		const timerFetchCategories = setTimeout(() => {
			dispatch(actions.fetchCategories());
		});

		const timerFilterCategories = setTimeout(() => {
			if (filterCategory === filterCategoriesRef.current.value) {
				dispatch(actions.filterCategory(filterCategory));
			}
		}, 500);

		return () => {
			clearTimeout(timerFetchCategories);
			clearTimeout(timerFilterCategories);
		};
	}, [dispatch, filterCategory]);
	return (
		<div
			ref={filterCategoriesRef}
			className="filter-categories-list list-group"
		>
			<h5 className="filter-category-title row">Filter by Category:</h5>
			<div
				ref={filterCategoriesRef}
				className="filter-category default-category row"
				onClick={(e) => dispatch(actions.filterCategory(e.target.value))}
				value={categoriesList[0]}
				role="button"
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
								ref={filterCategoriesRef}
								key={index}
								categoryValue={category}
								categoryText={category}
								clickCategory={() => dispatch(actions.filterCategory(category))}
							/>
						);
					})
					.reverse()}
		</div>
	);
}
