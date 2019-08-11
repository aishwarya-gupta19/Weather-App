import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
		<p className="weather__value">Enter a valid City and Country</p>
	</form>
);

export default Form;