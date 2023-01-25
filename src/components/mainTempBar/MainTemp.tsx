import React from 'react'
import { IWeatherData } from '../../interfaces/weather.interface'

type IMainTempProps = {
  chosenLocation: IWeatherData;
  chosenCity: string;
}

export default function MainTemp({ chosenLocation, chosenCity }: IMainTempProps) {
  return (
    <div>
      <div>
        <h1>{chosenCity}</h1>
      </div>
      {/* <img src={} alt="" /> */}
    </div>
  )
}