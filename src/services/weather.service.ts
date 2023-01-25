import httpService from './http.service';
import { AxiosResponse } from 'axios';

import { IWeatherData, IQData, IForecastData } from '../interfaces/weather.interface';

interface IWeatherService {
  getWeatherByLocation(lat: number, lon: number): Promise<AxiosResponse<IWeatherData>>;
  getDataByQ(q: string, limit: number): Promise<AxiosResponse<IQData>>;
  getForecastByLocation(lat: number, lon: number): Promise<AxiosResponse<IForecastData>>;
}

const appid = process.env.APPID;
const unitsParam = "metric";

const weatherService: IWeatherService = {
  async getWeatherByLocation(lat: number, lon: number) {
    const params = {
      lat,
      lon,
      appid,
      unitsParam
    };
    return httpService.get('/data/2.5/weather', { params });
  },
  async getDataByQ(q: string, limit: number) {
    const params = {
      q,
      limit,
      appid,
      unitsParam
    };
    return httpService.get('/geo/1.0/direct', { params });
  },
  async getForecastByLocation(lat: number, lon: number) {
    const params = {
      lat,
      lon,
      appid,
      unitsParam
    };
    return httpService.get('/data/2.5/forecast', { params });
  },
};

export default weatherService;
