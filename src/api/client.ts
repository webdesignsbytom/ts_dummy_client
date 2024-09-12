import axios, { AxiosResponse } from 'axios';

const host = process.env.REACT_APP_API_URL as string;
const tokenKey = process.env.REACT_APP_USER_TOKEN as string;

interface Client {
  get: (path: string) => Promise<AxiosResponse<any>>;
  post: (path: string, data: any, withToken?: boolean) => Promise<AxiosResponse<any>>;
  patch: (path: string, data: any, withToken?: boolean) => Promise<AxiosResponse<any>>;
  delete: (path: string) => Promise<AxiosResponse<any>>;
}

const client: Client = {
  get: (path: string) => {
    const url = `${host}${path}`;
    const headers = {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    };

    return axios.get(url, { headers });
  },

  post: (path: string, data: any, withToken = true) => {
    const url = `${host}${path}`;
    const token = localStorage.getItem(tokenKey);
    let headers: Record<string, string> = {};

    if (withToken && token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return axios.post(url, data, { headers });
  },

  patch: (path: string, data: any, withToken = true) => {
    const url = `${host}${path}`;
    const token = localStorage.getItem(tokenKey);
    let headers: Record<string, string> = {};

    if (withToken && token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return axios.patch(url, data, { headers });
  },

  delete: (path: string) => {
    const url = `${host}${path}`;
    const headers = {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    };

    return axios.delete(url, { headers });
  },
};

export default client;
