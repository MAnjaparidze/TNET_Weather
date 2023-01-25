import React from 'react'
import { IWeatherData } from '../../interfaces/weather.interface'

import AltitudeIco from '../../assets/extraInfo/altitude.png';
import HumidityIco from '../../assets/extraInfo/humidity.png';
import TempIco from '../../assets/extraInfo/temp.png';
import VisibilityIco from '../../assets/extraInfo/visibility.png';
import WindIco from '../../assets/extraInfo/wind.png';
import TimeIco from '../../assets/extraInfo/time.png';

type IExtraInfoProps = {
  chosenLocation: IWeatherData | null;
}

export default function ExtraInfo({ chosenLocation }: IExtraInfoProps) {

  const returnTime = () => {
    let date = new Date(chosenLocation ? chosenLocation.dt : '');

    return `${date.getHours()} : ${date.getMinutes()}`
  }

  return (
    <div className='p-4 text-white'>
      <span className='text-[1.5rem]'>AIR CONDITIONS</span>

      <div className='flex flex-row flex-wrap justify-between grow gap-y-10 mt-10'>
        <div className='flex flex-row items-center justify-start md:justify-start w-[30%]'>
          <div className='mr-4 w-[15%]'>
            <img src={TempIco} alt="" />
          </div>
          <div className='flex flex-col'>
            <span>Real Feel</span>
            <div>{chosenLocation?.main.feels_like} C</div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-start md:justify-center w-[30%]'>
          <div className='mr-4 w-[15%]'>
            <img src={WindIco} alt="" />
          </div>
          <div className='flex flex-col'>
            <span>Wind Speed</span>
            <div>{chosenLocation?.wind.speed} km/h</div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-start md:justify-end w-[30%]'>
          <div className='mr-4 w-[15%]'>
            <img src={HumidityIco} alt="" />
          </div>
          <div className='flex flex-col'>
            <span>Humidity</span>
            <div>{chosenLocation?.main.humidity}</div>
          </div>
        </div>
        <div className='flex flex-row items-start justify-start w-[30%]'>
          <div className='mr-4 w-[15%]'>
            <img src={TimeIco} alt="" />
          </div>
          <div className='flex flex-col'>
            <span>Current Time</span>
            <div>{returnTime()}</div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-start md:justify-center w-[30%]'>
          <div className='mr-4 w-[15%]'>
            <img src={AltitudeIco} alt="" />
          </div>
          <div className='flex flex-col'>
            <span>Altitude</span>
            <div>{chosenLocation?.main.sea_level || chosenLocation?.main.grnd_level || 'No Data'}</div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-start md:justify-end w-[30%]'>
          <div className='mr-4 w-[15%]'>
            <img src={VisibilityIco} alt="" />
          </div>
          <div className='flex flex-col'>
            <span>Visibility</span>
            <div>{chosenLocation?.visibility}</div>
          </div>
        </div>
      </div>
    </div>
  )
}