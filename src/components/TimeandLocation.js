import './Topbutton.module.css'



const TimeAndLocation = (props) => {
    return(
        <div> 
        <div className="d-flex align-items-end justify-content-center my-3 ">
                <p>{props.weather.formattedToLocalTime}</p>
        </div>
        
        <div className="d-flex align-items-end justify-content-center my-2 ">
            <p>{`${props.weather.name},${props.weather.country}`}</p>
        </div>

        </div>
    )
};

export default TimeAndLocation;