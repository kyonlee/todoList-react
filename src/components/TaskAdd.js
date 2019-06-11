import React from 'react';
import { connect } from 'react-redux';

import { createTask } from '../actions';
import TaskForm from './TaskForm';

const TaskAdd = ({ createTask }) => {
	return (
		<div className="row">
			<h2>Add a new task</h2>
			<TaskForm
				task={{ taskName: '', description: '' }}
				formType="Add"
				onSubmit={task => createTask(task)}
			/>
		</div>
	);
};

export default connect(
	null,
	{ createTask }
)(TaskAdd);
