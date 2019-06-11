import { CREATE_TASK, DELETE_TASK, EDIT_TASK } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case CREATE_TASK:
			return [...state, action.payload];
		case DELETE_TASK:
			return state.filter(el => el !== action.payload);
		case EDIT_TASK:
			return state.map(el =>
				el === action.payload.selectedTask ? action.payload.editedTask : el
			);
		default:
			return state;
	}
};
