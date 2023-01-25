interface IWeatherData {
  weather: [
    {
      id: number;
      main: string;
      description: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  dt: number;
  wind: {
    speed: number;
  };
  name: string,
  sys: {
    type: number
  }
}

interface IQData {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

interface IForecastData {
  list: IForecastItem[]
}

interface IForecastItem {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    id: number;
    main: string;
  }
}

export type {
  IWeatherData,
  IQData,
  IForecastData,
  IForecastItem
}