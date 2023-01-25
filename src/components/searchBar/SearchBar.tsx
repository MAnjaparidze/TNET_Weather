import React, { useState } from 'react'
import weatherService from '../../services/weather.service';

type ISearchBarProps = {}

function SearchBar({ }: ISearchBarProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [isSubmitted, toggleIsSubmitted] = useState<boolean>(false);
  const [isLoading, toggleIsLoading] = useState<boolean>(false);
  // const [predictedValue, setPredictedValue] = useState<string>('KAKADU');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      toggleIsLoading(true);
      let cityResponse = await weatherService.getDataByQ(inputValue).then(res => res);

      let weatherResponse = await weatherService.getWeatherByLocation(cityResponse.data[0].lat, cityResponse.data[0].lon)
      let forecastResponse = await weatherService.getForecastByLocation(cityResponse.data[0].lat, cityResponse.data[0].lon);
      console.log(weatherResponse, '[WEATHER DATA]');
      console.log(forecastResponse, '[WEATHER FORECAST]');
      if (cityResponse.status === 200) {
        toggleIsSubmitted(true);
        toggleIsLoading(false);
      }
    }
  }

  return (
    <>
      <input
        className='bg-transparent outline-none text-white w-full'
        onChange={handleChange} placeholder='Search for Cities'
        onKeyDown={handleSubmit}
        type="text"
        value={inputValue}
      />
    </>
  )
}

export default SearchBar;