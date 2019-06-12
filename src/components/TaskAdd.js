import React from 'react';
import { connect } from 'react-redux';

import { createTask } from '../actions';
import TaskForm from './TaskForm';

const TaskAdd = ({ createTask }) => {
	return (
		<div className="row">
			<h2>Add a new task</h2>
			<TaskForm
				initValues={{ taskName: '', description: '' }}
				btnConfig="Add"
				onSubmit={formValues => createTask(formValues)}
			/>
		</div>
	);
};

export default connect(
	null,
	{ createTask }
)(TaskAdd);
