import React, { useEffect, useState } from 'react';
import ExtraInfo from './components/extraInfoBar/ExtraInfo';

import MainTemp from './components/mainTempBar/MainTemp';
import SearchBar from './components/searchBar/SearchBar';
import Sidebar from './components/sidebar/Sidebar';

import { IForecastItem, IWeatherData } from './interfaces/weather.interface';
import weatherService from './services/weather.service';
interface ILocationProps {
  latitude: number;
  longitude: number;
}

function App() {
  const [isLoading, toggleIsLoading] = useState<boolean>(true);
  const [isError, toggleIsError] = useState<boolean>(false);
  const [currentLocation, setCurrentLocation] = useState<ILocationProps | null>(null);
  const [chosenCity, setChosenCity] = useState<string>("");
  const [chosenLocation, setChosenLocation] = useState<IWeatherData | null>(null);
  const [forecastData, setForecastData] = useState<IForecastItem[]>([]);

  useEffect(() => {
    handleGetCurrentLocation();

  }, []);

  useEffect(() => {
    if (currentLocation && !chosenLocation) handleGetWeatherData();
  }, [currentLocation])

  const handleGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => setCurrentLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }),
      error => {
        toggleIsError(true);
        console.log(`ვუი ვუი ეს რა დაგვემართა ${error}`);
      }
    );

    toggleIsLoading(false);
  };

  const handleGetWeatherData = async () => {
    let weatherResponse = await weatherService.getWeatherByLocation(currentLocation!.latitude, currentLocation!.longitude)
    let forecastResponse = await weatherService.getForecastByLocation(currentLocation!.latitude, currentLocation!.longitude);

    // Checking if both api requests were completed successfully
    if (weatherResponse.status === 200 && forecastResponse.status === 200) {
      setChosenLocation(weatherResponse.data);
      setForecastData(forecastResponse.data.list);
      setChosenCity(weatherResponse.data.name);
    } else {
      toggleIsError(true);
    }
  }

  return (
    <div className='flex flex-col gap-10 md:flex-row w-screen h-screen p-2 overflow-auto bg-main-dark'>

      <Sidebar />

      {isLoading ?
        <div className='grow text-center'>
          Please wait while we are fetching your location ^^
        </div>
        :
        <div className='grow'>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            <div className='p-2 md:col-span-2 md:row-span-1 bg-main-gray rounded-lg'>
              <SearchBar setChosenLocation={setChosenLocation} setForecastData={setForecastData} chosenCity={chosenCity} setChosenCity={setChosenCity} />
            </div>
            <div className='p-4 md:col-span-2 md:row-span-1 rounded-lg'>
              <MainTemp chosenCity={chosenCity} chosenLocation={chosenLocation} />
            </div>
            <div className='p-4 md:col-span-2 md:row-span-1 md:col-start-1 bg-main-gray rounded-lg'>Hourly Forecast</div>
            <div className='p-4 md:col-span-2 md:row-span-1 bg-main-gray rounded-lg'>
              <ExtraInfo chosenLocation={chosenLocation} />
            </div>
            <div className='p-4 md:col-span-1 md:col-start-3 md:row-span-4 md:row-start-1 bg-main-gray rounded-lg'>5 Day Forecast</div>
          </div>
        </div>}
    </div>
  );
}

export default App;
