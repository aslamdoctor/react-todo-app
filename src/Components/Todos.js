import Task from './Task';

export default function Todos(props) {
	function deleteTask(index) {
		props.onDeleteTask(index);
	}

	const tasksHtml = props.tasks.map((task, index) => {
		return (
			<Task
				task={task.theTask}
				done={task.done}
				key={index}
				onDeleteTask={() => {
					return deleteTask(index);
				}}
			/>
		);
	});

	return <ul>{tasksHtml}</ul>;
}
