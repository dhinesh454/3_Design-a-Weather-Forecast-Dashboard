
import { useEffect, useState ,useCallback} from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Forecast from './components/Forecast';
import Input from './components/Input';
import TempandDetails from './components/TempandDetails';
import TimeAndLocation from './components/TimeandLocation';
import { TiWeatherPartlySunny } from "react-icons/ti";

import Topbuttons from './components/Topbuttons';
import getFormattedWeatherData from './services/WeatherService';


function App() {
  const [query,setQuery] = useState('');
  const [units,setUnits] = useState('metric');
  const [weather,setWeather] = useState(null);


const getWeather = useCallback(async () => {
    
  try {
    const cityName = query.q ? query.q : "Current Location";
    toast.info(`Data Fetching for ${cityName}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const data = await getFormattedWeatherData({ ...query, units });
    setWeather(data);
    toast.success(`Successfully Fetched for ${cityName}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    console.log(error,error.message)
    toast.error(`No results found Try again !!..Enter the correct city Name`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}, [query, units]);

  useEffect(()=>{
    if(query==='') return
    getWeather();
  },[query,units,getWeather])

  const backgroundColor = () => {
    if(!weather) return '#0F689C';
    const value = units === 'metric' ? 20 : 60 ;
    if(weather.current.temp <= value) return '#0F689C';
    return '#DCA941'
  }


  return (
    <div
      className="mx-auto p-5 shadow-lg text-light" style={{maxWidth: '1024px',background:`${backgroundColor()}`// Custom shadow-gray-400
      }}
    >
     <ToastContainer/>
     <h1 style={{ borderRadius: '10px' }} className=' text-center text-dark fs-3 bg-white'>Weather Forecast <span  size={18} className='align-items-center text-primary'><TiWeatherPartlySunny /></span></h1>
      <Topbuttons setQuery={setQuery} />
      <Input setQuery={setQuery} setUnits={setUnits}/>
      {weather && 
        <>
      <TimeAndLocation weather={weather.current} />
      <TempandDetails weather={weather.current} units={units}/>
      <Forecast title='3 HOUR WEATHER FORECAST' data={weather.forecast.hourly}/>
      <Forecast title='DAILY WEATHER FORECAST' data={weather.forecast.daily}/>
      </>}
    </div>
  );
}

export default App;
