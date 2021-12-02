/* eslint-disable import/no-anonymous-default-export */
import {
	GET_ALL_POSTS,
	USER_REGISTER,
	GET_POST_DETAILS,
} from '../actionType/ActionType';

var initialState = {};

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_REGISTER:
			return {
				...state,
				registerList: action.payload,
			};
		case GET_ALL_POSTS:
			return {
				...state,
				AllPostList: action.payload,
			};
		case GET_POST_DETAILS:
			return {
				...state,
				PostDetailList: action.payload,
			};

		default:
			return state;
	}
};

export default homeReducer;
