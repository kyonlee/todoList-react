import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case CREATE_TASK:
			return [...state, action.payload];
		case DELETE_TASK:
			return state.filter(el => el.id !== action.payload);
		case UPDATE_TASK:
			return state.map(el =>
				el.id === action.payload.id ? action.payload : el
			);
		default:
			return state;
	}
};
