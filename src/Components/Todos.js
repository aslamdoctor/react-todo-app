import Task from './Task';

export default function Todos(props) {
	const tasksHtml = props.tasks.map((task, index) => {
		return <Task task={task.theTask} done={task.done} key={index} />;
	});

	return <ul>{tasksHtml}</ul>;
}
