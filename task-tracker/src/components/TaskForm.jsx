import {
	Box,
	Button,
	Card,
	CardContent,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const TaskForm = ({addNewTask}) => {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
    const addTask = (e) => { 
        const task = {id:Date.now(), title, date: new Date(date), isCompleted: false}
        addNewTask(task);
        setTitle("");
        setDate("");
      }
	return (
		<form action="">
			<Card sx={{ mt: 5 }}>
				<CardContent>
					<Typography variant="h5" align="center" mb={2}>
						Add Task
					</Typography>
					<TextField variant="outlined" label="Title" fullWidth onChange={(e)=>setTitle(e.target.value)} value={title} />
					<input
						type="date"
						style={{ marginTop: "10px", width: "100%", height: "23px" }}
                        onChange={(e)=> setDate(e.target.value)}
                        value={date}
					/>
					<Box sx={{ mt: "1rem", boxShadow: "2" }}>
						<Button fullWidth color="secondary" variant="contained" onClick={addTask}>
							ADD
						</Button>
					</Box>
				</CardContent>
			</Card>
		</form>
	);
};

export default TaskForm;
