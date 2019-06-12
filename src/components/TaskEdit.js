import React from 'react';
import { connect } from 'react-redux';

import { editTask, deselectTask } from '../actions';
import TaskForm from './TaskForm';

const TaskEdit = ({ selectedTask, editTask, deselectTask }) => {
	return (
		<div className="row">
			<h2>Edit a task</h2>
			<TaskForm
				initValues={selectedTask}
				btnConfig="edit"
				onSubmit={async formValues => {
					const { id, completed } = selectedTask;
					await editTask({ ...formValues, id, completed });
					deselectTask();
				}}
				onCancel={deselectTask}
			/>
		</div>
	);
};

export default connect(
	null,
	{ editTask, deselectTask }
)(TaskEdit);
