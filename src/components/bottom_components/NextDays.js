import React, {useState, useEffect} from "react";  
//import "./_NextDays.scss";
import "../../App.scss"

import clouds from "../../clouds.png"
import sun from "../../sun.png"
import rain from "../../rain.png"

 const NextDays  = (props) => {
    const {forecast, forecast3} =props;

    //estiloConitivo==="Altamente Adaptativo" && {backgroundColor:"green"}
        const [direccionador, setDireccioandor]=useState(0);
        
    const dateBuilder = (d, n) => {
        let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        let days = ["sunday", "monday", "tuesday", "webenesday", "thrusday", "friday", "saturday",];

        
        var dir=0;
        dir=d.getDay()+n;
    
        switch (dir) {
            case 7:
                dir=0;
                break;
            case 8:
                dir=1;
                break;
            case 9:
                    dir=2;
                    break; 

            default:
                break;
        }

        let day= days[dir];

        
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year= d.getFullYear();

        

        return `${day}`

    }


    return(

        <div>

            {( forecast.cod === "200") ? (
                <div>
                                <div className="forecast_title">
                                    <h6 style={{color:"black"}}>3 dyas forecast</h6>
                                </div>
                                    
                                    

                                    <div className="NextDaysContainer">
                                        
                                    <div className="dias_futuros">
                                        <div className="letra">
                                           
                                            {( forecast.list[6].weather[0].main === "Rain") ? (<img  style={{width: 40, height: 40,}} src={rain} />): ('')}
                                            {( forecast.list[6].weather[0].main === "Clouds") ? (<img  style={{width: 40, height: 40,}} src={clouds} />): ('')}
                                            {( forecast.list[6].weather[0].main === "Clear") ? (<img  style={{width: 40, height: 40,}} src={sun} />): ('')}
                                            <h4 style={{marginTop:18,marginLeft:4}}>{dateBuilder(new Date(),1)}</h4>
                                            
                                            <h5>{forecast.list[6].weather[0].main}</h5>
                                        </div>
                                        <div className="temp_dias_futuros">
                                            <h3 className="temp_forecast" >{forecast.list[6].main.temp}°c</h3>
                                        </div>
                                    </div>

                                    <div className="dias_futuros">
                                        <div className="letra">
                                             {( forecast.list[13].weather[0].main === "Rain") ? (<img  style={{width: 40, height: 40,}} src={rain} />): ('')}
                                             {( forecast.list[13].weather[0].main === "Clouds") ? (<img  style={{width: 40, height: 40,}} src={clouds} />): ('')}
                                            {( forecast.list[13].weather[0].main === "Clear") ? (<img  style={{width: 40, height: 40,}} src={sun} />): ('')}
                                             <h4 style={{marginTop:18,marginLeft:4}}>{dateBuilder(new Date(),2)}</h4>
                                            <p>{forecast.list[13].weather[0].main}</p>
                                        </div>
                                        <div className="temp_dias_futuros">
                                            <h3 className="temp_forecast">{forecast.list[13].main.temp}°c</h3>
                                        </div>
                                    </div>

                                    <div className="dias_futuros">
                                        <div className="letra">
                                            {( forecast.list[22].weather[0].main === "Rain") ? (<img  style={{width: 40, height: 40,}} src={rain} />): ('')}
                                            {( forecast.list[22].weather[0].main === "Clouds") ? (<img  style={{width: 40, height: 40,}} src={clouds} />): ('')}
                                            {( forecast.list[22].weather[0].main === "Clear") ? (<img  style={{width: 40, height: 40,}} src={sun} />): ('')}
                                            <h4 style={{marginTop:18,marginLeft:4}}>{dateBuilder(new Date(),3)}</h4>
                                            <p>{forecast.list[6].weather[0].main}</p>
                                        </div>
                                        <div className="temp_dias_futuros">
                                            <h3 className="temp_forecast">{forecast.list[22].main.temp}°c</h3>
                                        </div>
                                    </div>

                                    </div>

                </div>

            ) : ('') }
 
        </div>

    )
}

export default NextDays;