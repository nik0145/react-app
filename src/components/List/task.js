import React from "react";
function Task(props){
	return(
		<div>
		{props.obj.name}
			 <button onClick={props.onClick}>Delete</button>
			{/*   <button>Delete</button> */}
			 </div>
	)
}
export default Task;