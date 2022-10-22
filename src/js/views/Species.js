import React,{useContext} from "react";
import { Context } from "../store/appContext";

export const Specie=()=>{
    const {store,actions}=useContext(Context);
    let datos=store.specie;
    return(
        <div className="card">
            {datos.map((datos,index)=>(
                <div className="card-body">
                 <h5 key={index}>Especies de Star Wars:{datos.name}</h5>
                </div>
            ))}
        </div>
    )
}