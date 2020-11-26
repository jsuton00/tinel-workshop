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

export const postOutput = async () => {
	return await axios.post('http://localhost:5000/output');
};
