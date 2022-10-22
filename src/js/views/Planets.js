import React,{useContext} from "react";
import { Context } from "../store/appContext";

export const Planets=()=>{
    const {store, actions}=useContext(Context);
    let datos=store.planets;
    return(
        <div className="card">
            {datos.map((datos,index)=>(
                <div className="card-body">
                    <h5 key={index}>Planetas de Star Wars:{datos.name}</h5>
                </div>
            ))}
        </div>
    );
}