export const formatPrice = (value) => {
	let inputPriceValue = Number(value);
	return inputPriceValue.toFixed(2).replace('.', ',');
};

export const formatSubtotal = (value) => {
	let subtotalValue = Number(value);
	let parsedToLocaleString = '';

	if (subtotalValue >= 1000) {
		parsedToLocaleString = subtotalValue.toLocaleString();
		return parsedToLocaleString;
	} else {
		return subtotalValue;
	}
};
