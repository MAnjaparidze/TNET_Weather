import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface IHttpService {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/',
});

const httpService: IHttpService = {
  get: <T = any>(url: string, config?: AxiosRequestConfig) => instance.get<T>(url, config),
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => instance.post<T>(url, data, config),
  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => instance.put<T>(url, data, config),
  delete: <T = any>(url: string, config?: AxiosRequestConfig) => instance.delete<T>(url, config),
};

export default httpService;
