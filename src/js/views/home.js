import React,{useContext} from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	
	const { store, actions } = useContext(Context);
	let datos=store.people;
	console.log(datos);
	//console.log(planets.map((datos,index)=>console.log(datos.name)));
	return(
	<div className="text-center mt-5">
		<h1>App Starwars</h1>
	</div>
)};
