import React, { useState } from 'react';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
	const [filter, setFilter] = useState('all');

	const FILTER_TABS = ['all', 'active', 'completed'];

	// filtering feature
	function filterTasks() {
		switch (filter) {
			case 'active':
				return tasks.filter(task => task.completed === false);
			case 'completed':
				return tasks.filter(task => task.completed === true);
			default:
				return tasks;
		}
	}

	function renderList(taskList) {
		return taskList.map(task => {
			return <TaskItem key={task.id} task={task} />;
		});
	}

	function renderTabs() {
		return FILTER_TABS.map(tab => {
			return (
				<div
					key={tab}
					className={filter === tab ? 'btn' : 'btn-flat'}
					onClick={() => setFilter(tab)}
				>
					{tab}
				</div>
			);
		});
	}

	return (
		<div>
			<h3>Task List</h3>
			{tasks.length === 0 ? (
				<div className="row">
					<div className="grey-text">You currently have no tasks</div>
				</div>
			) : (
				<div>
					<div className="row">
						<div className="right">{renderTabs()}</div>
					</div>
					{renderList(filterTasks())}
				</div>
			)}
		</div>
	);
};

const mapStateToProps = ({ tasks }) => {
	return {
		tasks
	};
};

export default connect(mapStateToProps)(TaskList);
