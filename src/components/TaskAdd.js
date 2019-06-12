import React from 'react';
import { connect } from 'react-redux';

import { createTask, deselectTask } from '../actions';
import TaskForm from './TaskForm';

const TaskAdd = ({ createTask }) => {
	return (
		<div className="row">
			<h2>Add a new task</h2>
			<TaskForm
				initValues={{ taskName: '', description: '' }}
				btnConfig="add"
				onSubmit={formValues => createTask(formValues)}
				onCancel={deselectTask}
			/>
		</div>
	);
};

export default connect(
	null,
	{ createTask, deselectTask }
)(TaskAdd);
