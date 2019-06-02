import React from 'react';

import TaskForm from './TaskForm';
import TaskList from './TaskList';

class App extends React.Component {
	state = {
		tasks: []
	};

	// todo editing and removing task feature

	render() {
		return (
			<div className="container">
				<TaskForm
					onSubmit={task =>
						this.setState({ tasks: [...this.state.tasks, task] })
					}
				/>
				{this.state.tasks.length === 0 ? null : (
					<TaskList tasks={this.state.tasks} />
				)}
			</div>
		);
	}
}

export default App;
