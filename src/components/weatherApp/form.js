import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './form.css';
const Form = props =>{
	return(
			<form onSubmit={props.methodWeather} className="form">
			<TextField
        required
        id="outlined-required"
        label="City"
		name="city" 
        variant="outlined"
      />
	  <Button variant="contained" type = "submit" color="primary">
	  Get weatherd
      </Button>
			</form>
	)
}

 export default Form;