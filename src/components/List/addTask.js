import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
const fabStyle = {
	margin: '20px',
  };
function AddTask(props){
	return(
		
		<form onSubmit={props.handleForm}>
		<TextField
        id="standard-name"
        label="Name Task"
        margin="normal"
		type = "text" name ="add"
      />
		<Fab type="submit" size="medium" style={fabStyle} color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
		</form>
	)
}
export default AddTask;