import Task from "./task";
import React from "react";
function Tasks(props){
	return (
		<div>
		   {props.arr.map((obj,i)=>
			   <Task 
				   key = {i} 
				   obj = {obj}
				   onClick = {()=>props.deleteTask(obj)}
			   ></Task> 
			   )}			
	   </div>
	)
}
export default Tasks;