import React, {useEffect, useState} from "react";
import './App.scss';
import NextDays from "./components/bottom_components/NextDays";
import Place_visit from "./components/bottom_components/Place_visit";
import TopReviews from "./components/bottom_components/TopReviews";
import Temp_france from "./components/bottom_components/Temp_france";
//import request from 'superagent';
import superagent from 'superagent';

import cloud from "../src/cloud.png"
import ubicacion from "../src/ubicacion.png"

function App() {

  const [items, setItems] = useState([]);
  const [lyon, setLyon] = useState([]);
  const [paris, setParis] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [forecast3, setForecast3] = useState('undefined');
  



  useEffect(() => {
    setForecast3("undefined")
    superagent
    .get("http://api.openweathermap.org/data/2.5/weather?id=3688685&appid=f3f9babb3568c704f039ec166f758e11&units=metric")
    .query(null)
    .set('Accept', 'application/json')
    .end ((error, response)=>{
        const title=response.body
        //console.log(JSON.stringify(title));
        //alert(title)
        setItems(title)
    })

    superagent
    .get("http://api.openweathermap.org/data/2.5/weather?id=2996944&appid=f3f9babb3568c704f039ec166f758e11&units=metric")
    .query(null)
    .set('Accept', 'application/json')
    .end ((error, response)=>{
        const title=response.body
        //console.log(JSON.stringify(lyon));
        //alert(title)
        setLyon(title)
    })
    superagent
    .get("http://api.openweathermap.org/data/2.5/weather?id=2968815&appid=f3f9babb3568c704f039ec166f758e11&units=metric")
    .query(null)
    .set('Accept', 'application/json')
    .end ((error, response)=>{
        const title=response.body
        //console.log(JSON.stringify(paris));
        setParis(title)
    })


    //FORECAST 5
    superagent
    .get("http://api.openweathermap.org/data/2.5/forecast?id=3688685&appid=f3f9babb3568c704f039ec166f758e11&units=metric")
    .query(null)
    .set('Accept', 'application/json')
    .end ((error, response)=>{ 
        const title=response.body;
        //console.log(JSON.stringify(title));
        //console.log(title)
        setForecast(title);
        setForecast3(title.list)
      //console.log("ESTO ES el forecast 5 dias",{forecast})
      //alert({items})
      })

  }, [])


  return (
    <div className="App">

      {(typeof items.name != "undefined") ? (<div className="logo" ></div>) : ('') }

          {(typeof items.name != "undefined") ? (
        
                    <div className="main-box">
                      <div className="banner">
                        <div className="cityPrin">
                            
                            <img  style={{width: 20, height: 34, marginRight:4,}} src={ubicacion} />
                             <h6 style={{fontSize:21}} >{items.name}</h6>
                        </div>
                      </div>

                      <div className="cloud-container">
                      
                        <img  style={{width: 44, height: 36, marginBottom:-8, marginTop:4,}} src={cloud} />
                        <h6 style={{fontSize:16}}>{items.weather[0].main}</h6>
                      </div>
                      <div className="temp">
                        <h2 className="h2tb">{items.main.temp}°c</h2>
                      </div>
                      <div className="bottom-container">

                          
                              <div className="rectangulo">
                              <NextDays forecast={forecast} forecast3={forecast3} />
                            </div>                       
                             
                


                          <div className="rectangulo">
                            <Place_visit/>
                          </div>
                          <div className="rectangulo">
                            <TopReviews/>
                          </div>
                          <div className="rectangulo">
                              <Temp_france lyon={lyon} paris={paris} />
                          </div>
                      </div>       
                    </div>
                
            ) : ( ''

            ) }


    </div>
  );
}

export default App;
