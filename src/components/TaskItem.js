import React from 'react';

const TaskItem = props => {
	// todo removing and editing buttons

	return (
		<li className="collection-item">
			<h5 className="title">{props.taskName}</h5>
			<p>{props.description}</p>
		</li>
	);
};

export default TaskItem;
