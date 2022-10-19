import { Checkbox, ListItem, ListItemText, IconButton, Tooltip } from '@mui/material';
import { MdCheckCircle, MdOutlineCircle, MdDelete } from "react-icons/md";
import './TaskItem.scss';

const TaskItem = ({ task, onComplete, onDelete}) => {

  const {title, isCompleted, date, id } = task;
  return (

    <>
      <ListItem disablePadding className={`TaskItem ${isCompleted&&'completed'}` }>
        <Checkbox
            onChange={() => onComplete(id)}
          icon={ <MdOutlineCircle className='checkIcon' /> }
          checkedIcon={ <MdCheckCircle className="checkIcon" /> }
        />
        <ListItemText primary={title} secondary={date} />
        
        <Tooltip title="Remove" arrow>
          <IconButton onClick={() => onDelete(id)}>
            <MdDelete className='deleteIcon'/>
          </IconButton>
        </Tooltip>
      </ListItem>
    </>
  )
}

export default TaskItem