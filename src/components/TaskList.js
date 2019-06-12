import React from 'react';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
	const renderList = () => {
		return tasks.map(task => {
			return <TaskItem key={task.id} task={task} />;
		});
	};

	// sorting function
	// const completedTasks = tasks.filter(task => task.completed === true);
	// const activeTasks = tasks.filter(task => task.completed === false);

	// console.log(completedTasks);
	// console.log(activeTasks);

	return (
		<div>
			<h3>Task List</h3>
			<div className="section">{renderList()}</div>
		</div>
	);
};

const mapStateToProps = ({ tasks }) => {
	return {
		tasks
	};
};

export default connect(mapStateToProps)(TaskList);
