import React from "react";
const  Weather =props =>(
		<div>
		{props.city && 
			<div>
				<p>Город {props.city},{props.country}</p>
				<p>темп {props.temp}</p>
				<p>Восход {props.sunrise}</p>
			</div>	
		}

		{props.error}
	</div> 

)
 export default Weather;