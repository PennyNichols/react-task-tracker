import { List } from '@mui/material'
import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks }) => {
  return (
    <List sx={{mt:5, boxShadow:1, p:1}}>
        {
            tasks.map(task=> <TaskItem key={task.id} task={task}/>)
        }
    </List> 
  )
}

export default TaskList;