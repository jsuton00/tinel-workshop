export const formatPrice = (value) => {
	let inputPriceValue = Number(value);
	return inputPriceValue.toFixed(2).replace('.', ',');
};
