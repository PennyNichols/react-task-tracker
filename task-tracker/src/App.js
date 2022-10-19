import { Container } from "@mui/material";
import { useState } from "react";
import Navigation from "./components/Navigation";
import TaskItem from "./components/TaskItem/TaskItem";
import TaskList from "./components/TaskItem/TaskList";
import data from "./data.json";

function App() {
	const [tasks, setTasks] = useState(data);
	//Toggle Task complete
	const toggleComplete = (id) => {
		//find index of the task in the tasks array
		let index = tasks.findIndex((task) => task.id === id);
		// make copy
		let updatedTasks = [...tasks];
		// toggle isCompleted property
		updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
		setTasks(updatedTasks);
	};

	return (
		<div>
			<Navigation />
			<Container maxWidth="sm">
				<TaskList tasks={tasks} />
			</Container>
		</div>
	);
}

export default App;
