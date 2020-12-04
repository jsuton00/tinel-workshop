import axios from 'axios';

export const fetchWorkshops = async () => {
	return await axios.get('http://localhost:5000/workshops');
};

export const fetchUsers = async () => {
	return await axios.get('http://localhost:5000/users');
};

export const fetchCategories = async () => {
	return await axios.get('http://localhost:5000/categories');
};

export const fetchOrders = async () => {
	return await axios.get('http://localhost:5000/orders');
};

export const postOrder = async (cartItem, itemQuantity) => {
	return await axios.post('http://localhost:5000/orders', [
		{ cartItem, ...cartItem, itemQuantity },
	]);
};

export const fetchWorkshop = async (id) => {
	return await axios.get(`http://localhost:5000/workshops/${id}`);
};

export const fetchUser = async (id) => {
	return await axios.get(`http://localhost:5000/users/${id}`);
};
