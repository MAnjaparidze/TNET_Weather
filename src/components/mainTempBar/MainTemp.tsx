import React from 'react'
import { IWeatherData } from '../../interfaces/weather.interface'

import Sun from '../../assets/weatherTypes/Sunny.png';
import Storm from '../../assets/weatherTypes/Storm.png';
import Sunny_Clouds from '../../assets/weatherTypes/Sunny_Clouds.png';
import Sunny_Rain from '../../assets/weatherTypes/Sunny_Rain.png';
import Clouds from '../../assets/weatherTypes/Clouds.png';
import Mist from '../../assets/weatherTypes/Mist.png';
import Snow from '../../assets/weatherTypes/Snow.png';


type IMainTempProps = {
  chosenLocation: IWeatherData | null;
  chosenCity: string;
}

interface IWeatherKeyProps {
  Mist: string;
  Clear: string;
  Clouds: string;
  Snow: string;
  Rain: string;
  Storm: string;
  [key: string]: string;
}

const weatherKeyPairs: IWeatherKeyProps = {
  Mist: Mist,
  Clear: Sun,
  Clouds: Clouds,
  Snow: Snow,
  Rain: Sunny_Rain,
  Storm: Storm,
}

export default function MainTemp({ chosenLocation, chosenCity }: IMainTempProps) {
  return (
    <div className='flex md:flex-row flex-col justify-between items-center text-white'>
      <div className='flex flex-col flex-grow w-full md:w-auto'>
        <span className='text-[2.5rem] font-bold'>{chosenCity}</span>
        <span className='mb-16'>{chosenLocation?.weather[0].description}</span>

        <span className='mt-auto mb-2 text-[3rem] font-bold'>Temp: {chosenLocation?.main.temp} C</span>
      </div>
      <div>
        {<img src={weatherKeyPairs[chosenLocation ? chosenLocation.weather[0].main : Sunny_Clouds]} alt="" />}
      </div>
    </div>
  )
}