import React from 'react';
import { connect } from 'react-redux';

import { editTask, deselectTask } from '../actions';
import TaskForm from './TaskForm';

const TaskEdit = ({ selectedTask, editTask, deselectTask }) => {
	return (
		<div className="row">
			<h2>Edit a task</h2>
			<TaskForm
				task={selectedTask}
				formType="Edit"
				onSubmit={task => {
					editTask(task);
					deselectTask();
				}}
			/>
		</div>
	);
};

const mapStateToProps = ({ selectedTask }) => {
	return {
		selectedTask
	};
};

export default connect(
	mapStateToProps,
	{ editTask, deselectTask }
)(TaskEdit);
