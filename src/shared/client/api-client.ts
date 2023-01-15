import axios, { AxiosRequestConfig } from "axios";

const URL = '';

const Api = axios.create({
  baseURL: `${URL}/api`,
});

Api.interceptors.request.use(
  (config: AxiosRequestConfig | any): AxiosRequestConfig => {

    return config;
  }
);

export default Api;
