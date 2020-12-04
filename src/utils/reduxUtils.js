export const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties,
	};
};

export const createProduct = (workshop, itemQuantity) => {
	return Object.assign(workshop, { quantity: itemQuantity });
};
