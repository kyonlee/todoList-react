import React from 'react';
import { connect } from 'react-redux';

import TaskAdd from './TaskAdd';
import TaskEdit from './TaskEdit';
import TaskList from './TaskList';

const App = ({ selectedTask }) => {
	return (
		<div className="container">
			<div className="section">
				{selectedTask ? <TaskEdit selectedTask={selectedTask} /> : <TaskAdd />}
			</div>
			<TaskList />
		</div>
	);
};

const mapStateToProps = ({ selectedTask }) => {
	return {
		selectedTask
	};
};

export default connect(mapStateToProps)(App);
