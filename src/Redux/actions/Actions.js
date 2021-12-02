import axios from 'axios';

import { GET_ALL_POSTS, GET_POST_DETAILS } from '../actionType/ActionType';

const url = 'http://localhost:8000';

export const uploadFile = async post => {
	console.log(post);
	try {
		return await axios.post(`${url}/file/upload`, post);
	} catch (error) {
		console.log('Error while calling uploadFile API ', error);
	}
};

export const createPost = post => dispatch => {
	console.log('this is post ', post);
	try {
		axios
			.post(`${url}/create`, post)
			.then(res => {
				window.location.href = '/';
			})
			.catch(err => console.log(err));
	} catch (error) {
		console.log('Error while calling createPost API ', error);
	}
};

// export const getAllPosts = async param => {
// 	try {
// 		let response = await axios.get(`${url}/posts${param}`);
// 		return response.data;
// 	} catch (error) {
// 		console.log('Error while calling getPosts API ', error);
// 	}
// };

export const getAllPosts = param => dispatch => {
	// dispatch(setLoading(true));

	axios
		.get(`${url}/posts${param}`)
		.then(res => {
			dispatch({
				type: GET_ALL_POSTS,
				payload: res?.data,
			});
			console.log(res);
			// dispatch(setLoading(false));
		})
		.catch(err => console.log(err));
};

// export const getPost = async id => {
// 	try {
// 		let response = await axios.get(`${url}/post/${id}`);
// 		return response.data;
// 	} catch (error) {
// 		console.log('Error while calling getPost API ', error);
// 	}
// };

export const getPost = id => dispatch => {
	// dispatch(setLoading(true));

	axios
		.get(`${url}/post/${id}`)
		.then(res => {
			dispatch({
				type: GET_POST_DETAILS,
				payload: res?.data,
			});
			console.log(res);
			// dispatch(setLoading(false));
		})
		.catch(err => console.log(err));
};

export const updatePost = async (id, post) => {
	try {
		return await axios.put(`${url}/update/${id}`, post);
	} catch (error) {
		console.log('Error while calling updatePost API ', error);
	}
};

export const deletePost = id => dispatch => {
	try {
		axios
			.delete(`${url}/delete/${id}`)
			.then(res => {
				console.log(res);

				// window.location.href = '#/';
			})
			.catch(err => console.log(err));
	} catch (error) {
		console.log('Error while calling deletePost API ', error);
	}
};

export const newComment = async comment => {
	try {
		return await axios.post(`${url}/comment/new/`, comment);
	} catch (error) {
		console.log('Error while calling newComment API ', error);
	}
};

export const getComments = async id => {
	try {
		let response = await axios.get(`${url}/comments/${id}`);
		return response.data;
	} catch (error) {
		console.log('Error while calling getComments API ', error);
	}
};

export const deleteComment = async id => {
	try {
		return await axios.delete(`${url}/comment/delete/${id}`);
	} catch (error) {
		console.log('Error while calling deleteComments API ', error);
	}
};
