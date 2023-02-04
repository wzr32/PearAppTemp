import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../constants/constanst";

const URL = BASE_URL;

const Api = axios.create({
  baseURL: `${URL}/`,
});

Api.interceptors.request.use(
  (config: AxiosRequestConfig | any): AxiosRequestConfig => {

    return config;
  }
);

export default Api;
