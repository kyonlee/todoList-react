import React from 'react';
import { connect } from 'react-redux';

import { deleteTask, selectTask, toggleTask, deselectTask } from '../actions';

const TaskItem = ({
	task,
	deleteTask,
	selectTask,
	toggleTask,
	deselectTask
}) => {
	return (
		<div
			className={`card hoverable ${task.completed ? 'teal lighten-3' : null}`}
			onClick={() => toggleTask(task)}
		>
			<div
				className={`card-content ${task.completed ? 'white-text' : null}`}
				style={task.completed ? { textDecoration: 'line-through' } : null}
			>
				<span className="card-title">{task.taskName}</span>
				<p>{task.description}</p>
			</div>
			<div className="card-action">
				<a href="#/">
					<i
						className="material-icons"
						onClick={e => {
							e.stopPropagation();
							selectTask(task);
						}}
					>
						edit
					</i>
				</a>
				<a href="#/">
					<i
						className="material-icons"
						onClick={async () => {
							await deleteTask(task.id);
							deselectTask();
						}}
					>
						delete
					</i>
				</a>
			</div>
		</div>
	);
};

export default connect(
	null,
	{ deleteTask, selectTask, toggleTask, deselectTask }
)(TaskItem);
