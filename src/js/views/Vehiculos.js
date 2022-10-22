import React,{useContext} from "react";
import { Context } from "../store/appContext";

export const Vehiculos=()=>{
    const {store,actions}=useContext(Context);
    let datos=store.vehiculos
    return(
        <div className="card">
            {datos.map((datos,index)=>(
                <div className="card-body">
                    <h5 key={index}>Vehiculos en start wars:{datos.name}</h5>
                </div>
            ))}
        </div>
    )
}