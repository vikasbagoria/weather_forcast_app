import React, { useEffect, useState } from 'react';
import './weather.css';

const Tempapp = () =>{

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("delhi");
    
    useEffect(()=>{
        const fetchApi = async()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f1cd86a297675a857fb5f74cd2bfbcc0`
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);

        }
        fetchApi();
    },[search])

    return (
        <>
        
        <h1 id="main_heading">WEATHER FORCAST</h1>
        <div className="box">
            <div className="inputData">
        <input type="search" className="inputFeild" placeholder="Type your city name.." onChange={(event)=>{setSearch(event.target.value) }} />
            </div>

            {!city ? (
                <p>No Data Found</p>
            ) : (
                <div>
                <div className="info">
            <h2 className="location" >
            <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className="temp">
                {city.temp}
            </h1>
            <h3 className="tempmin_max">Min :{city.temp_min}°C | Max : {city.temp_max}°C</h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>
        
            )

            }
        
            </div>
        </>
    )
}
export default Tempapp;