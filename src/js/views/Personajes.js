import React,{useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Personaje = () => {
	const { store, actions } = useContext(Context);
	let datos=store.people;
	return(
	<div className="card">
		{datos.map((datos,index)=>(
			<div className="card-body">
			<h5 key={index}>Personaje Star Wars:{datos.name}</h5>	
			</div>
		))}
	</div>
)};