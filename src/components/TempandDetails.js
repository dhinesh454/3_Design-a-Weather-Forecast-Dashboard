import './Topbutton.module.css'
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise,GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md";
import { Image } from "react-bootstrap";











const TempandDetails = (props) => {

    const verticalDetails = [
        {
            id:1,
            Icon:FaThermometerEmpty,
            title:"Real Feel",
            value:`${props.weather.feels_like.toFixed()}°`
        },
        {
            id:2,
            Icon:BiSolidDropletHalf,
            title:"Humidity",
            value:`${props.weather.humidity.toFixed()}%`
        },
        {
            id:3,
            Icon:FiWind,
            title:"Wind",
            value:`${props.weather.speed.toFixed()}${props.units === 'metric'? 'Km/h' : 'm/s'}`
        }
    ];



    
    const horizontalDetails = [
        {
            id:1,
            Icon:GiSunrise,
            title:"Sunrise",
            value:props.weather.sunrise
        },
        {
            id:2,
            Icon:GiSunset,
            title:"Sunset",
            value:props.weather.sunset
        },
        {
            id:3,
            Icon:MdKeyboardArrowUp,
            title:"High",
            value:`${props.weather.temp_max.toFixed()}°`
        },
        {
            id:4,
            Icon:MdKeyboardArrowDown,
            title:"Low",
            value:`${props.weather.temp_min.toFixed()}°`
        }
    ]



  return(
    <div>
        <div className="d-flex align-items-center justify-content-center py-6 ">
            <p>{props.weather.main}</p>
        </div>

        <div className="d-flex align-items-center justify-content-between py-3 mx-2 ">
            <Image  className='w-20' src={props.weather.icon} alt="weather icon"/>
            <h1  className="fw-bold">{`${props.weather.temp.toFixed()}° ${props.units === 'metric' ? 'C' : 'F'}`}</h1>
        <div className="d-flex flex-column gap-3 align-items-start">

        {
            verticalDetails.map((data)=>(
            <div key={data.id} className="d-flex text-light fs-6 align-items-center justify-content-center fw-bold fst-italic">
                <data.Icon size={18} className="mr-1 fst-italic"/>
                {data.title}:<span className="ml-1 "> {data.value}</span>
            </div>
            ))
        }
           
        </div>
        </div>


        <div className="d-flex flex-row align-items-center justify-content-center fs-6 gap-5 py-3">
            {horizontalDetails.map((data)=>(
                    <div key={data.id} className="d-flex flex-row ">
                    <data.Icon size={19} className="mr-1 fst-italic"/>
                   <p className='fw-bold' style={{fontSize:'medium'}}>{data.title}:<span className="ml-1 " style={{fontSize:'small'}}> {data.value}</span></p>
                  </div>
            ))}
        </div>



    </div>
    
  )
};


export default TempandDetails;