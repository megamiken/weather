import React from "react";  
//import "./_NextDays.scss";
import "../../App.scss"

import ubicacion from "../../../src/ubicacion.png";


 const NextDays  = () => {

    return(
        <div>
        <div className="TopReviews_Container">
            
            <div className="top-reviews">
                <div>
                    
                    <p style={{fontSize:12, marginLeft:4, marginTop:8, color:"gray", fontWeight:"bold"}}>Top reviews</p>
                </div>

            </div>

            <div className="mid-review">
                <div>
                    <img  style={{width:16, height: 26, marginTop:4}} src={ubicacion} />
                    <p style={{fontSize:14, marginLeft:12, marginTop:-8}}>moserrate</p>
                </div>

            </div>

            <div className="bottom-review">
                <div>
                     <img  style={{width: 12, height: 18, marginRight:4, marginTop:1,marginLeft:4,padding:1}} src={ubicacion} />
                     <p  style={{fontSize:14, marginLeft:12,}}>Parque Jaime Duque</p>
                </div>
                    
                <div className="btn-add-jd">
                    <h2 style={{marginTop:12}}>+</h2>
                </div>
            </div>


        </div>


        </div>


    )
}

export default NextDays;