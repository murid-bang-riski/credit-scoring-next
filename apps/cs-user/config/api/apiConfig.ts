import axios, { AxiosRequestConfig } from "axios";
import { getSession } from "next-auth/react";

type Session = {
  user?: {
    id: string;
    fullname: string;
    email: string;
    token: {
      access_token: string;
    };
  };
};

const apiConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

const api = axios.create(apiConfig);

api.interceptors.request.use(
  async (config) => {
    const session: Session = (await getSession()) as Session;
    const token = session?.user?.token.access_token as string;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { api };
