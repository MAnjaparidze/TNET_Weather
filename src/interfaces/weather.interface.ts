interface IWeatherData {
  weather: [
    {
      id: number;
      main: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    sea_level: number
  };
  visibility: number;
  wind: {
    speed: number;
  };
}

interface IQData {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

interface IForecastData {
  list: [{
    dt: number;
    main: {
      temp: number;
    };
    weather: {
      id: number;
      main: string;
    }
  }]
}

export type {
  IWeatherData,
  IQData,
  IForecastData
}