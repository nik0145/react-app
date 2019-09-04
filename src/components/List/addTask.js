import React from "react";
function AddTask(props){
	return(
		<form onSubmit={props.handleForm}>
		<input   type = "text" name ="add" placeholder="Name Task"/>
		<button>Add</button>	
		</form>
	)
}
export default AddTask;