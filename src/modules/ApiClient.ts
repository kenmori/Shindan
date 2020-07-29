import axios, { AxiosInstance, AxiosResponse } from "axios";
import camelCaseKeys from "camelcase-keys";

let client: AxiosInstance;

export default client = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

client.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const data = camelCaseKeys(response.data);
    return { ...response.data, data };
  }
);

export const isSuccessResponse = <T>(res: any): res is T => {
  return res.status < 300;
};

export const splitCsrfCookie = () => {
  return document.cookie.split("_csrf=")[1];
};
