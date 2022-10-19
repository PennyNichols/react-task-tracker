import { Checkbox, ListItem, ListItemText } from '@mui/material';
import { MdCheckCircle, MdOutlineCircle } from "react-icons/md";
import './TaskItem.scss';

const TaskItem = () => {
  return (

    <>
      <ListItem disablePadding className="TaskItem">
        <Checkbox
          icon={ <MdOutlineCircle className='checkIcon' /> }
          checkedIcon={ <MdCheckCircle className="checkIcon" /> }
        />
        <ListItemText primary="Walk the dog" secondary="March 29 2022"/>
      </ListItem>
    </>
  )
}

export default TaskItem