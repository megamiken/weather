import React from "react";  
//import "./_NextDays.scss";
import "../../App.scss"
import Lyon from "./temp_france_components/Lyon";
import Paris from "./temp_france_components/Paris";

 const Temp_france  = (props) => {
   
    const {
        lyon,paris
    } =props;

    
    return(
        <div>
        <div className="france_Container">
            
            <div className="top-c">
               <Lyon lyon={lyon} />
            </div>

            <div className="mid">
                <div>
                    <Paris paris={paris} />
                </div>

            </div>

            <div className="bottom-c">
                <div >
                    <button className="location-btn">Add locations</button>
                </div>

            </div>


        </div>


        </div>


    )
}

export default Temp_france;