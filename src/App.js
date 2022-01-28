import React from 'react';
import Todos from './Components/Todos';

function App() {
	// Single Task (textbox)
	const [task, setTask] = React.useState({
		theTask: '',
		done: false,
	});

	function handleTaskChange(event) {
		setTask({
			theTask: event.target.value,
			done: false,
		});
	}

	function handleTaskKeyUp(event) {
		if (event.keyCode === 13) {
			// store task
			setTasks((prevState) => {
				return [...prevState, task];
			});
			emptyTask();
		}
	}

	function emptyTask() {
		setTask({
			theTask: '',
			done: false,
		});
	}

	// All tasks
	const [tasks, setTasks] = React.useState([]);

	function deleteTask(index) {
		setTasks((prevState) => {
			const tempTasks = [...prevState];
			tempTasks.splice(index, 1);
			return tempTasks;
		});
	}

	return (
		<div className="App">
			<div className="container">
				<h1>Todo List</h1>

				<input
					type="text"
					name="task"
					className="textbox"
					placeholder="Press 'Enter' key to add task"
					onChange={handleTaskChange}
					onKeyUp={handleTaskKeyUp}
					value={task.theTask}
				/>

				<Todos tasks={tasks} onDeleteTask={deleteTask} />
			</div>
		</div>
	);
}

export default App;
