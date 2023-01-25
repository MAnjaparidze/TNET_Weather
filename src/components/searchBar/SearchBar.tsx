import React, { SetStateAction, useState } from 'react'
import { IForecastItem, IWeatherData } from '../../interfaces/weather.interface';
import weatherService from '../../services/weather.service';

import EnterLogo from '../../assets/Enter_Logo.png';

type ISearchBarProps = {
  setChosenLocation: React.Dispatch<React.SetStateAction<IWeatherData | null>>;
  setForecastData: React.Dispatch<React.SetStateAction<IForecastItem[]>>;
  setChosenCity: React.Dispatch<React.SetStateAction<string>>;
  chosenCity: string;
}

function SearchBar({ setChosenLocation, setForecastData, setChosenCity }: ISearchBarProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [isSubmitted, toggleIsSubmitted] = useState<boolean>(false);
  const [isLoading, toggleIsLoading] = useState<boolean>(false);
  const [isError, toggleIsError] = useState<boolean>(false);
  // const [predictedValue, setPredictedValue] = useState<string>('KAKADU');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSubmit = async () => {
    toggleIsLoading(true);
    let cityResponse = await weatherService.getDataByQ(inputValue).then(res => res);
    // Checking if User Typed City Name is Incorrect
    if (cityResponse.status === 200 && cityResponse.data.length === 0) {
      toggleIsSubmitted(true);
      toggleIsError(true);
    } else {
      // If the city was found then we are requesting city's weather data
      let weatherResponse = await weatherService.getWeatherByLocation(cityResponse.data[0].lat, cityResponse.data[0].lon)
      let forecastResponse = await weatherService.getForecastByLocation(cityResponse.data[0].lat, cityResponse.data[0].lon);

      // Checking if both api requests were completed successfully
      if (weatherResponse.status === 200 && forecastResponse.status === 200) {
        setChosenLocation(weatherResponse.data);
        setForecastData(forecastResponse.data.list);
        setChosenCity(inputValue);
        toggleIsSubmitted(true);
      } else {
        toggleIsSubmitted(true);
        toggleIsError(true);
      }
    }

    toggleIsLoading(false);
  };

  const handleOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  const handleResetState = () => {
    toggleIsSubmitted(false);
    toggleIsError(false);
  }

  return (
    <div className='flex flex-row justify-between items-center'>
      <input
        className={`bg-transparent outline-none flex-grow font-bold ${isSubmitted ? isError ? 'text-red-700' : 'text-green-700' : 'text-white'}`}
        onChange={handleChange} placeholder='Search for Cities'
        onKeyDown={handleOnEnter}
        onFocus={handleResetState}
        disabled={isLoading}
        type="text"
        value={inputValue}
      />
      {(inputValue && !isSubmitted) &&
        <div className='w-4 cursor-pointer' onClick={handleSubmit}>
          <img src={EnterLogo} alt="" />
        </div>}
    </div>
  )
}

export default SearchBar;