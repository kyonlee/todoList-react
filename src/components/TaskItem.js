import React from 'react';
import { connect } from 'react-redux';

import { deleteTask, selectTask } from '../actions';

const TaskItem = ({ task, deleteTask, selectTask }) => {
	return (
		<div className="card">
			<div className="card-content">
				<span className="card-title">{task.taskName}</span>
				<p>{task.description}</p>
			</div>
			<div className="card-action">
				<a href="#/">
					<i className="material-icons" onClick={() => selectTask(task)}>
						edit
					</i>
				</a>
				<a href="#/">
					<i className="material-icons" onClick={() => deleteTask(task)}>
						delete
					</i>
				</a>
			</div>
		</div>
	);
};

export default connect(
	null,
	{ deleteTask, selectTask }
)(TaskItem);
