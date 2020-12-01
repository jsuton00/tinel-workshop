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

export const postOrders = async (workshop, quantity, total) => {
	return await axios.post('http://localhost:5000/orders', {
		products: [{ ...workshop, quantity }],
		total: total,
	});
};

export const fetchWorkshop = async (id) => {
	return await axios.get(`http://localhost:5000/workshops/${id}`);
};

export const fetchUser = async (id) => {
	return await axios.get(`http://localhost:5000/users/${id}`);
};
