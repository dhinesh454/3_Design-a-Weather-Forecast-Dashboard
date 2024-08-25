import { Form , Button } from "react-bootstrap";
 import { BiSearch,BiCurrentLocation } from "react-icons/bi";
 import classes from './Input.module.css'
import { useState } from "react";

const Input = (props) => {
    const [city,setCity] = useState('');


    const searchHandler = () => {
        if(city!==''){
            props.setQuery({q:city})
        }
    };


    const locationHandler = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const {latitude,longitude} = position.coords
                props.setQuery({lat:latitude,lon:longitude})
            })
        }
    }

    return (
       <div className="d-flex flex-row justify-content-center my-2 mx-2">
        
            <div className="d-flex align-items-center gap-3 w-75">
               <Form.Control 

                    className = 'text-dark fst-italic'
                    type="text" placeholder="search by city..." 
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}    
                    />
               <BiSearch onClick={searchHandler} className={classes.icons} size={30}/>
                <BiCurrentLocation onClick={locationHandler} size={30} className={classes.icons}/>
            </div>

            <div className={`d-flex align-items-center justify-content-center  w-25 mx-2 gap-1 ${classes.temp}`}>
                <Button onClick={()=>props.setUnits("metric")} >°C</Button>
               <span className="fs-5">|</span>
                <Button onClick={()=>props.setUnits("imperial")}>°F</Button>
            </div>
        
       </div>
    )
};

export default Input;
