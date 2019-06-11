import {
	CREATE_TASK,
	DELETE_TASK,
	SELECT_TASK,
	DESELECT_TASK,
	EDIT_TASK
} from './types';

export const createTask = task => {
	return {
		type: CREATE_TASK,
		payload: task
	};
};

export const deleteTask = task => {
	return {
		type: DELETE_TASK,
		payload: task
	};
};

export const selectTask = task => {
	return {
		type: SELECT_TASK,
		payload: task
	};
};

export const deselectTask = () => {
	return {
		type: DESELECT_TASK
	};
};

export const editTask = editedTask => (dispatch, getState) => {
	const { selectedTask } = getState();

	dispatch({
		type: EDIT_TASK,
		payload: {
			selectedTask,
			editedTask
		}
	});
};
