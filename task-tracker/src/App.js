import { Container } from "@mui/material";
import { useState } from "react";
import Navigation from "./components/Navigation";
import TaskItem from "./components/TaskItem/TaskItem";
import TaskList from "./components/TaskItem/TaskList";
import data from "./data.json";

function App() {
	const [tasks, setTasks] = useState(data);
  const [show, setShow] = useState(false);
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

  //delete task
  const deleteTask =(id) => {
    let updatedTasks = tasks.filter(task => task.id !==id)
    setTasks(updatedTasks)
  }
	return (
		<div>
			<Navigation />
			<Container maxWidth="sm">
				<TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
			</Container>
		</div>
	);
}

export default App;
