import React from "react";

import Tasks from "./tasks";
import AddTask from "./addTask";
class List extends React.Component{
	constructor(){
		super();
		this.state ={
			tasks:Array(1).fill({name:"task test "})
		}
		this.addTask = this.addTask.bind(this);
		this.DeleteTask = this.DeleteTask.bind(this);
	}
	
	addTask = e => {
		e.preventDefault();
		if(!e.target.elements.add.value) return null;
		const tasks = this.state.tasks.slice();
		tasks.push({"name":e.target.elements.add.value});
		this.setState({
			tasks:tasks
		})
	};
	DeleteTask = (obj) =>{
		const tasks = this.state.tasks.slice();
		
		const findTasks = tasks.filter(ob =>ob !== obj);
		this.setState({
			tasks:findTasks
		})
		

   };
	 render(){
		 return (
			 <div>
				 <p>Task manager</p> 
				 <AddTask handleForm = {this.addTask}/>
				 <Tasks 
				  deleteTask = {(value)=>this.DeleteTask(value)}
				  arr={this.state.tasks}
				  />
				 </div>
		 )
	 }
}
export default List;