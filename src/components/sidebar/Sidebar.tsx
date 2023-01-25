import React, { useState } from 'react';

import Logo from "../../assets/Logo.png";
import WeatherLogo from '../../assets/sidebarTabs/WeatherTab.png';
import CitiesLogo from '../../assets/sidebarTabs/CitiesTab.png';
import SettingsLogo from '../../assets/sidebarTabs/SettingsTab.png';

interface Props { }

const Sidebar: React.FC<Props> = () => {


  return (
    <div className={`flex flew-row md:flex-col items-center p-2 md:p-4 bg-main-gray rounded-lg w-full md:w-auto h-16 md:h-full mb-6 md:mb-0`}>
      <div className='w-10 h-10 bg-secondary-gray rounded-md md:mb-6'>
        <img src={Logo} alt="My Image" />
      </div>

      <div className='flex flew-row md:flex-col gap-2  ml-4 md:ml-0'>
        <div className="p-2 flex flex-col items-center">
          <div className='w-6 h-6'>
            <img src={WeatherLogo} alt="" />
          </div>
          <span className='text-white text-sm'>Weather</span>
        </div>
        <div className="p-2 flex flex-col items-center">
          <div className='w-6 h-6'>
            <img src={CitiesLogo} alt="" />
          </div>
          <span className='text-white text-sm'>Cities</span>
        </div>
        <div className="p-2 flex flex-col items-center">
          <div className='w-6 h-6'>
            <img src={SettingsLogo} alt="" />
          </div>
          <span className='text-white text-sm'>Settings</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
