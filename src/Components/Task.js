import React from 'react';

export default function Task(props) {
	const [done, setDone] = React.useState(props.done);
	function handleDoneClick(event) {
		setDone((prevState) => !prevState);
	}

	const doneClass = done ? 'done' : '';
	return (
		<li
			className={doneClass}
			onClick={handleDoneClick}
			title="Click to mark/unmark done"
		>
			{props.task}
		</li>
	);
}
