import { SELECT_TASK, DESELECT_TASK } from '../actions/types';

export default (state = null, action) => {
	switch (action.type) {
		case SELECT_TASK:
			return action.payload;
		case DESELECT_TASK:
			return null;
		default:
			return state;
	}
};
