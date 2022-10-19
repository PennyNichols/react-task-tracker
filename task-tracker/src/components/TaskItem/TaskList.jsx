import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <List sx={{mt:5, boxShadow:1, p:1}}>
        {tasks.length>=1?(
            <>   
                {
                    tasks.map(task=> <TaskItem key={task.id} task={task} onComplete={toggleComplete} onDelete={deleteTask} />)
                }
            </>
        ) : (
            <ListItem>
                <ListItemText primary="No Tasks Here!"/>
            </ListItem>
        )}

    </List> 
  )
}

export default TaskList;