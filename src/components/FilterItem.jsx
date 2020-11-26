import React from 'react';
import { loadFilterIcons } from '../utils/loadImages';
import { FilterCategoryIcon } from './Images';

export default function FilterItem(props) {
	const { categoryValue, categoryText } = props;
	return (
		<div className="filter-category row" value={categoryValue}>
			<p className="filter-category-text">
				<span className="filter-category-icon">
					<FilterCategoryIcon
						imgSrc={loadFilterIcons(categoryValue)}
						altText={categoryValue}
					/>{' '}
				</span>
				{categoryText}
			</p>
		</div>
	);
}
