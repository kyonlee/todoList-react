import {
	CREATE_TASK,
	DELETE_TASK,
	SELECT_TASK,
	DESELECT_TASK,
	UPDATE_TASK
} from './types';

let nextTodoId = 0;

export const createTask = formValues => {
	return {
		type: CREATE_TASK,
		payload: { ...formValues, id: nextTodoId++, completed: false }
	};
};

export const deleteTask = taskId => {
	return {
		type: DELETE_TASK,
		payload: taskId
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

export const editTask = updatedTask => {
	return {
		type: UPDATE_TASK,
		payload: updatedTask
	};
};

export const toggleTask = task => {
	return {
		type: UPDATE_TASK,
		payload: { ...task, completed: !task.completed }
	};
};
