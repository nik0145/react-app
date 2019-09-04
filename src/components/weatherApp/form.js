import React from "react";
class Form extends React.Component{
  render(){
    return(
    	<form onSubmit={this.props.methodWeather}>
    	<input type="text" name="city" placeholder = "City"/>
    	<button>get weather</button>

    	</form> )
  }
}
 export default Form;