import { Button } from "react-bootstrap";
import classes from './Topbutton.module.css'

const Topbuttons = (props) => {

    const cities = [
        {
            id:1,
            name:'London'
        },
        {
            id:2,
            name:'Chennai'
        },
        {
            id:3,
            name:'Mumbai'
        },
        {
            id:4,
            name:'Tokyo'
        }

    ]

  

return(
    <div className={`d-flex align-items-center justify-content-around my-5 ${classes.TopButton}`}>
            {cities.map( city =>(
                <Button key={city.id} onClick={()=>props.setQuery({q:city.name})}>
                    {city.name}
                </Button>
            ))}
    </div>
)
};


export default Topbuttons