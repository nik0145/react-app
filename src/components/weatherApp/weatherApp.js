import React from "react";
import Info from "./info";
import Weather from "./weather";
import Form from "./form";
const API_KEY = "82b797b6ebc625032318e16f1b42c016";

class WeatherApp extends React.Component{
	constructor(){
		super();
		this.state={
			temp:undefined,
			city:undefined,
			country:undefined,
			sunrise:undefined,
			error:undefined
		}
		this.gettingWeathers = this.gettingWeathers.bind(this);
	};

	async gettingWeathers (e){
		e.preventDefault();
		let city = e.target.elements.city.value;
		//Kiev
		if(city){
			const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
			const data = await api_url.json();
			console.log(data);
			if(data.cod === "404"){
				this.setState({
					error:"Not found this city "
				})
			}else{
				let date = new Date();
				date.setTime(data.sys.sunset);
				let sunset_date = date.getHours()+":" + date.getMinutes(); 
				this.setState({
					temp:data.main.temp,
					city:data.name,
					country:data.sys.country,
					sunrise:sunset_date,
					error:""
				});
			}
		
		}else{
			this.setState({
				error:"Название города ?"
			})
		}
	
	};
	render(){
return(
	<div>
	<Info/>
	<Form methodWeather={this.gettingWeathers} />
	<Weather 
	temp={this.state.temp}
	city={this.state.city}
	country={this.state.country}
	sunrise={this.state.sunrise}
	error={this.state.error}
/>
	</div>
)
}


}

export default WeatherApp;