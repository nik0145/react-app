import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import EventNote from '@material-ui/icons/EventNote';

const useStyles = makeStyles(theme => ({
	root: {
	  display: 'flex',
	  justifyContent: 'center',
	  flexWrap: 'wrap',
	},
	chip: {
	  margin: theme.spacing(1),
	},
  }));
function Task(props){
	const classes = useStyles();
	return(
		<div>
		
		<Chip
        icon={<EventNote />}
        label={props.obj.name}
        onDelete={props.onClick}
        className={classes.chip}
      />
			 </div>
	)
}
export default Task;