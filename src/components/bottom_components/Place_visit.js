import React from "react";  
//import "./_NextDays.scss";
import "../../App.scss"

import ubicacion from "../../../src/ubicacion.png";

 const NextDays  = () => {

    return(
        <div>
        
        <div className="Place_visitContainer">
             <h6 style={{color:"black"}}>Place to visit</h6>
            <div className="placeto_visit_img">
                
                <div >
                    <img  style={{width: 20, height: 34, marginRight:4,marginTop:20}} src={ubicacion} />
                    <p style={{fontSize:12, marginLeft:8, marginTop:8, fontWeight:"bold"}}>Museo Botero</p>
                </div>
            </div>

        </div>

        </div>

    )
}

export default NextDays;