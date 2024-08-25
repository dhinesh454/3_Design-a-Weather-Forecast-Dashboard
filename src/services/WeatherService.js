import { DateTime } from "luxon";

const API_KEY = 'd25960d3886ae4ead426d69880f560d3'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';



const getWeatherData = async (infoType,searchParams) => {
    const url = new URL(BASE_URL+infoType);
    url.search = new URLSearchParams ({...searchParams,appid:API_KEY});

    const res = await fetch(url);
    const data = await res.json();

    return data;

};


const iconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`


const formatToLocalTime = (secs,offset,format="cccc,dd LLL yyyy' | Localtime : 'hh:mm a" ) => 
    DateTime.fromSeconds(secs + offset , {zone: 'utc'} ).toFormat(format)



const formatCurrent = (data) => {
    const {
        coord:{lat,lon},
        main:{temp,feels_like,temp_min,temp_max,humidity},
        name,
        dt,
        sys:{country,sunrise,sunset}, 
        timezone,
        weather,
        wind:{speed,deg}
    }=data;



    const {main,description,icon} = weather[0];
    const formattedToLocalTime = formatToLocalTime(dt,timezone);
    
    return{
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        country,
        sunrise:formatToLocalTime(sunrise,timezone,'hh:mm a'),
        sunset:formatToLocalTime(sunset,timezone,'hh:mm a'),
        speed,
        deg,
        main,
        description,
        icon : iconUrl(icon),
        dt,
        timezone,
       formattedToLocalTime
      

    }
}



const formatdForecastWeather = (secs,offset,data)=>{
    const hourly = data.filter(item => item.dt>secs).map((i)=>({
        temp:i.main.temp,
        title:formatToLocalTime(i.dt,offset,'hh:mm a'),
        icon:iconUrl(i.weather[0].icon),
        data:i.dt_txt

    })).slice(0,5);


    const daily  = data.filter(f =>f.dt_txt.slice(-8)==="00:00:00").map(f=>({
        temp:f.main.temp,
        title:formatToLocalTime(f.dt,offset,'ccc'),
        icon:iconUrl(f.weather[0].icon),
        data:f.dt_txt
    }))

    return {hourly,daily}
}



 const getFormattedWeatherData = async (searchParams) => {
    const formattedcurrentweather = await getWeatherData('weather',searchParams) ;
    const current = formatCurrent(formattedcurrentweather)

    const {dt,lat,lon,timezone} = current;
 const formattedForecastWeather = await getWeatherData('forecast',{
        lat,lon,
        units:searchParams.units
    });
    const forecast = formatdForecastWeather(dt,timezone,formattedForecastWeather.list);
    

     return ({current,forecast})
 };


 export default getFormattedWeatherData