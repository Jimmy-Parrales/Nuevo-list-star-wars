import React,{useContext} from "react";
import { Context } from "../store/appContext";

export const Naves=()=>{
    const {store,actions}=useContext(Context);
    let datos=store.naves;

    return(
        <div className="card">
            {datos.map((datos,index)=>(
                <div className="card-body">
                    <h5 key={index}>Naves de start Wars:{datos.name}</h5>
                </div>
            ))}
        </div>
    )
}