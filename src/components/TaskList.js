import React from 'react';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';

const TaskList = props => {
	const renderList = () => {
		return props.tasks.map((task, index) => {
			return <TaskItem key={index} task={task} />;
		});
	};

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
