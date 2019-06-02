import React from 'react';

import TaskItem from './TaskItem';

const TaskList = props => {
	const renderList = () => {
		return props.tasks.map((task, index) => {
			return (
				<TaskItem
					key={index}
					taskName={task.taskName}
					description={task.description}
				/>
			);
		});
	};

	return (
		<div>
			<h3>Task List</h3>
			<ul className="collection">{renderList()}</ul>
		</div>
	);
};

export default TaskList;
