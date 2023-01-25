import React, { useState } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import Sidebar from './components/sidebar/Sidebar';
import { IWeatherData } from './interfaces/weather.interface';

function App() {
  const [chosenLocation, setChosenLocation] = useState<IWeatherData | null>(null);

  return (
    <div className='flex flex-col gap-10 md:flex-row w-screen h-screen p-2 overflow-auto bg-main-dark'>

      <Sidebar />

      <div className='grow'>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <div className='p-2 md:col-span-2 md:row-span-1 bg-main-gray rounded-lg'>
            <SearchBar />
          </div>
          <div className='p-4 bg-gray-200 md:col-span-2 md:row-span-1'>Main Temperature</div>
          <div className='p-4 bg-gray-200 md:col-span-2 md:row-span-1 md:col-start-1'>Hourly Forecast</div>
          <div className='p-4 bg-gray-200 md:col-span-2 md:row-span-1'>Extra Information</div>
          <div className='p-4 bg-gray-200 md:col-span-1 md:col-start-3 md:row-span-4 md:row-start-1'>5 Day Forecast</div>
        </div>
      </div>
    </div>
  );
}

export default App;
