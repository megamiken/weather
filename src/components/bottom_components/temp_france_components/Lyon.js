import React from "react";  
//import "./_NextDays.scss";
//import "../../App.scss"
import cloud2 from "../../../../src/cloud2.png"

 const Lyon  = (props) => {
    const {lyon} =props;
    
    return(

        
        <div className="lyon-container">
            
            {(typeof lyon.name != "undefined") ? (

                <div>
                        <div className="half_top_lyon" >
                            <div className="lyon_icon">
                                <img  style={{width: 44, height: 36, marginBottom:-8, marginTop:4,}} src={cloud2} />
                            </div>
                            <div className="lyon_temp">
                                <h4 className="h4lyon">{lyon.main.temp}°c
                                </h4>
                            </div>
                            <div className="lyon_name">
                                <h4 className="h4lyon">{lyon.name}</h4>
                                <h6 style={{color:"black", fontSize:12 }}>Francia</h6>
                            </div>
                        </div>

                        <div className="half_bottom_lyon" >
                            <div className="lyon_h">
                                <h6 style={{color:"black", fontSize:10 }}>Humidity: {lyon.main.humidity}%</h6>
                            </div>
                            <div className="lyon_x">
                                <h6 style={{color:"black", fontSize:10 }}>no se</h6>
                            </div>
                            <div className="lyon_v">
                                <h6 style={{color:"black", fontSize:10 }}>{lyon.wind.speed} km/h</h6>
                            </div>
                        </div>
                </div>

            ) : ('') }    


        </div>



    )
}

export default Lyon;


/*
                <div className="half_top_lyon" >
                    <div className="lyon_icon">
                        <img  style={{width: 44, height: 36, marginBottom:-8, marginTop:4,}} src={cloud2} />
                    </div>
                    <div className="lyon_temp">
                        <h4 className="h4lyon">{lyon.main.temp}°c
                        </h4>
                    </div>
                    <div className="lyon_name">
                        <h4 className="h4lyon">{lyon.name}</h4>
                        <p style={{color:"black"}}>Francia</p>
                    </div>
                </div>

                <div className="half_bottom_lyon" >
                    <div className="lyon_h"></div>
                    <div className="lyon_x"></div>
                    <div className="lyon_v"></div>
                </div>

*/