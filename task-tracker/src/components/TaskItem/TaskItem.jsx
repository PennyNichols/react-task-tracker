import { Checkbox, ListItem, ListItemText, IconButton, Tooltip } from '@mui/material';
import { MdCheckCircle, MdOutlineCircle, MdDelete } from "react-icons/md";
import './TaskItem.scss';

const TaskItem = () => {
  return (

    <>
      <ListItem disablePadding className="TaskItem">
        <Checkbox
          icon={ <MdOutlineCircle className='checkIcon' /> }
          checkedIcon={ <MdCheckCircle className="checkIcon" /> }
        />
        <ListItemText primary="Walk the dog" secondary="March 29 2022" />
        
        <Tooltip title="Remove" arrow>
          <IconButton>
            <MdDelete className='deleteIcon'/>
          </IconButton>
        </Tooltip>
      </ListItem>
    </>
  )
}

export default TaskItem