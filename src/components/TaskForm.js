import React from 'react';
import M from 'materialize-css';

class TaskForm extends React.Component {
	state = {
		taskName: '',
		description: ''
	};

	componentDidMount() {
		M.AutoInit();
	}

	onTaskSubmit = event => {
		event.preventDefault();

		if (!this.state.taskName || !this.state.description) {
			return;
		}

		this.props.onSubmit(this.state);
		this.setState({ taskName: '', description: '' });
	};

	// todo validation and error messages

	render() {
		return (
			<div className="row">
				<h2>Add a new task</h2>
				<form
					className="col s12"
					autoComplete="off"
					onSubmit={this.onTaskSubmit}
				>
					<div className="row">
						<div className="input-field col s6">
							<input
								id="task_name"
								type="text"
								maxLength="25"
								value={this.state.taskName}
								onChange={e => this.setState({ taskName: e.target.value })}
							/>
							<label htmlFor="task_name">Task Name</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input
								id="description"
								type="text"
								maxLength="50"
								value={this.state.description}
								onChange={e => this.setState({ description: e.target.value })}
							/>
							<label htmlFor="description">Description</label>
						</div>
					</div>
					<button className="btn right" type="submit">
						<i className="material-icons right">add</i>
						Add
					</button>
				</form>
			</div>
		);
	}
}

export default TaskForm;
