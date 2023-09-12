import { api } from "config";
import { THomeDataResponse } from "@cs-user/types";

export const homeDataRequest = async (): Promise<THomeDataResponse> => {
  const { data } = await api.get(`/dashboard/superior`);
  return data;
};
