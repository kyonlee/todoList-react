import React from 'react';

import TaskForm from './TaskForm';
import TaskList from './TaskList';

class App extends React.Component {
	state = {
		tasks: []
	};

	render() {
		return (
			<div className="container">
				<TaskForm
					onSubmit={task =>
						this.setState({ tasks: [...this.state.tasks, task] })
					}
				/>
				<TaskList tasks={this.state.tasks} />
			</div>
		);
	}
}

export default App;
